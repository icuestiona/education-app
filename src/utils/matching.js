const SUBJECT_MATCH_WEIGHTS = {
  subject: 0.5,
  availability: 0.25,
  ageRange: 0.15,
  preference: 0.1,
};

const normalizeDayTimeMap = (availability = {}) => {
  const normalized = {};
  Object.entries(availability).forEach(([day, times = []]) => {
    normalized[day] = Array.isArray(times) ? times.map((time) => String(time).toLowerCase()) : [];
  });
  return normalized;
};

const overlapScore = (a = {}, b = {}) => {
  const daysA = Object.keys(a);
  const daysB = Object.keys(b);
  const commonDays = daysA.filter((day) => daysB.includes(day));

  if (commonDays.length === 0) {
    return 0;
  }

  const commonAvailability = commonDays.reduce((total, day) => {
    const timesA = a[day] || [];
    const timesB = b[day] || [];
    const sharedTimes = timesA.filter((time) => timesB.includes(time));
    return total + sharedTimes.length;
  }, 0);

  const totalSlots = [...new Set([...daysA, ...daysB])].length;
  return totalSlots === 0 ? 0 : commonAvailability / totalSlots;
};

const scoreTutorStudentMatch = ({ tutor, student }) => {
  const tutorSubjects = new Set((tutor.subjects || []).map((subject) => String(subject).toLowerCase()));
  const studentSubjects = new Set((student.subjects || []).map((subject) => String(subject).toLowerCase()));
  const sharedSubjects = [...studentSubjects].filter((subject) => tutorSubjects.has(subject));

  const subjectScore = studentSubjects.size
    ? sharedSubjects.length / Math.max(studentSubjects.size, 1)
    : 0;

  const normalizedTutorAvailability = normalizeDayTimeMap(tutor.availability);
  const normalizedStudentAvailability = normalizeDayTimeMap(student.availability);
  const availabilityScore = overlapScore(normalizedTutorAvailability, normalizedStudentAvailability);

  const tutorAgeRange = (tutor.preferredAgeRanges || []).map((range) => String(range).toLowerCase());
  const studentGrade = String(student.grade || '').toLowerCase();
  const ageMatch = tutorAgeRange.includes(studentGrade) ? 1 : 0;

  const tieBreakScore = tutor.subjects?.some((subject) =>
    String(subject).toLowerCase() === String(student.primaryNeed || '').toLowerCase())
    ? 1
    : 0;

  const total =
    SUBJECT_MATCH_WEIGHTS.subject * subjectScore +
    SUBJECT_MATCH_WEIGHTS.availability * availabilityScore +
    SUBJECT_MATCH_WEIGHTS.ageRange * ageMatch +
    SUBJECT_MATCH_WEIGHTS.preference * tieBreakScore;

  return Number(Math.min(Math.max(total, 0), 1).toFixed(3));
};

const matchTutorsToStudents = (tutors = [], students = []) => {
  const matches = [];

  students.forEach((student) => {
    const studentMatches = tutors
      .map((tutor) => ({
        tutorId: tutor.id,
        studentId: student.id,
        tutorName: tutor.name,
        score: scoreTutorStudentMatch({ tutor, student }),
      }))
      .sort((a, b) => b.score - a.score);

    matches.push({ studentId: student.id, studentName: student.name, matches: studentMatches });
  });

  return matches;
};

module.exports = {
  scoreTutorStudentMatch,
  matchTutorsToStudents,
};
