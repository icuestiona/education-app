const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const jwt = require('jsonwebtoken');
const { matchTutorsToStudents, scoreTutorStudentMatch } = require('./src/utils/matching');

const app = express();
const PORT = process.env.PORT || 4000;
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';

app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200,
    standardHeaders: true,
    legacyHeaders: false,
  })
);
app.use(express.json({ limit: '1mb' }));

const tutors = [
  {
    id: 't1',
    name: 'Aisha',
    email: 'aisha@example.com',
    subjects: ['Math', 'Science'],
    availability: { Monday: ['morning'], Tuesday: ['afternoon'] },
    preferredAgeRanges: ['5-6 grades'],
  },
  {
    id: 't2',
    name: 'Sam',
    email: 'sam@example.com',
    subjects: ['English', 'History'],
    availability: { Wednesday: ['afternoon'] },
    preferredAgeRanges: ['7-8 grades'],
  },
];

const students = [
  {
    id: 's1',
    name: 'Noah',
    email: 'noah@example.com',
    subjects: ['Math'],
    availability: { Monday: ['morning'], Wednesday: ['afternoon'] },
    grade: '5-6 grades',
    primaryNeed: 'Math',
  },
  {
    id: 's2',
    name: 'Maya',
    email: 'maya@example.com',
    subjects: ['English'],
    availability: { Tuesday: ['afternoon'] },
    grade: '7-8 grades',
    primaryNeed: 'English',
  },
];

const sessions = [];

const sanitizeUser = (user) => ({
  id: user.id,
  name: user.name,
  email: user.email,
  subjects: user.subjects || [],
  availability: user.availability || {},
  grade: user.grade,
  preferredAgeRanges: user.preferredAgeRanges || [],
});

app.get('/', (_req, res) => {
  res.json({
    app: 'EnlightNet API',
    status: 'running',
    endpoints: [
      '/api/health',
      '/api/tutors',
      '/api/students',
      '/api/match',
      '/api/sessions',
      '/api/video/meeting-link',
    ],
  });
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  const user = [...tutors, ...students].find((entry) => entry.email === email);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials.' });
  }

  const token = jwt.sign({ sub: user.id, email: user.email, role: user.subjects ? 'student' : 'tutor' }, JWT_SECRET, {
    expiresIn: '8h',
  });

  return res.json({ token, user: sanitizeUser(user) });
});

app.get('/api/tutors', (_req, res) => {
  res.json(tutors);
});

app.get('/api/students', (_req, res) => {
  res.json(students);
});

app.post('/api/tutors/register', (req, res) => {
  const { name, email, subjects, availability, preferredAgeRanges, additionalNotes } = req.body || {};

  if (!name || !email || !subjects?.length) {
    return res.status(400).json({ message: 'Name, email, and at least one subject are required.' });
  }

  const tutor = {
    id: `t${Date.now()}`,
    name,
    email,
    subjects,
    availability: availability || {},
    preferredAgeRanges: preferredAgeRanges || [],
    additionalNotes: additionalNotes || '',
  };

  tutors.push(tutor);
  res.status(201).json({ message: 'Tutor profile created.', tutor });
});

app.post('/api/students/register', (req, res) => {
  const { name, email, subjects, availability, grade, primaryNeed } = req.body || {};

  if (!name || !email || !subjects?.length) {
    return res.status(400).json({ message: 'Name, email, and at least one subject are required.' });
  }

  const student = {
    id: `s${Date.now()}`,
    name,
    email,
    subjects,
    availability: availability || {},
    grade: grade || '',
    primaryNeed: primaryNeed || subjects[0],
  };

  students.push(student);
  res.status(201).json({ message: 'Student profile created.', student });
});

app.get('/api/match', (_req, res) => {
  const matches = matchTutorsToStudents(tutors, students);
  res.json(matches);
});

app.post('/api/match', (req, res) => {
  const { tutorId, studentId } = req.body || {};

  if (tutorId && studentId) {
    const tutor = tutors.find((entry) => entry.id === tutorId);
    const student = students.find((entry) => entry.id === studentId);

    if (!tutor || !student) {
      return res.status(404).json({ message: 'Tutor or student not found.' });
    }

    return res.json({
      tutorId,
      studentId,
      score: scoreTutorStudentMatch({ tutor, student }),
      message: 'Compatibility calculated successfully.',
    });
  }

  const matches = matchTutorsToStudents(tutors, students);
  res.json(matches);
});

app.get('/api/sessions', (_req, res) => {
  res.json(sessions);
});

app.post('/api/sessions', (req, res) => {
  const { tutorId, studentId, scheduledFor, topic, notes } = req.body || {};

  if (!tutorId || !studentId || !scheduledFor) {
    return res.status(400).json({ message: 'tutorId, studentId, and scheduledFor are required.' });
  }

  const session = {
    id: `session-${Date.now()}`,
    tutorId,
    studentId,
    scheduledFor,
    topic: topic || 'General tutoring',
    notes: notes || '',
    status: 'scheduled',
    createdAt: new Date().toISOString(),
  };

  sessions.push(session);
  res.status(201).json(session);
});

app.put('/api/sessions/:sessionId', (req, res) => {
  const { sessionId } = req.params;
  const session = sessions.find((entry) => entry.id === sessionId);

  if (!session) {
    return res.status(404).json({ message: 'Session not found.' });
  }

  Object.assign(session, req.body);
  res.json(session);
});

app.get('/api/video/meeting-link', (_req, res) => {
  const meetingLink = `https://meet.example.com/room-${Date.now()}`;
  res.json({ meetingLink });
});

app.listen(PORT, () => {
  console.log(`EnlightNet API running on http://localhost:${PORT}`);
});

module.exports = app;
