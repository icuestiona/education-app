const { scoreTutorStudentMatch, matchTutorsToStudents } = require('./matching');

describe('tutor matching', () => {
  test('scores compatible tutors highly for subjects and availability', () => {
    const tutor = {
      id: 't1',
      name: 'Aisha',
      subjects: ['Math', 'Science'],
      availability: { Monday: ['morning'], Tuesday: ['afternoon'] },
      preferredAgeRanges: ['5-6 grades'],
    };

    const student = {
      id: 's1',
      name: 'Noah',
      subjects: ['Math'],
      availability: { Monday: ['morning'], Wednesday: ['afternoon'] },
      grade: '5-6 grades',
    };

    expect(scoreTutorStudentMatch({ tutor, student })).toBeGreaterThan(0.6);
  });

  test('returns best matches ordered by compatibility score', () => {
    const tutors = [
      {
        id: 't1',
        name: 'Aisha',
        subjects: ['Math'],
        availability: { Monday: ['morning'] },
        preferredAgeRanges: ['5-6 grades'],
      },
      {
        id: 't2',
        name: 'Sam',
        subjects: ['Science'],
        availability: { Wednesday: ['afternoon'] },
        preferredAgeRanges: ['7-8 grades'],
      },
    ];

    const students = [
      {
        id: 's1',
        name: 'Noah',
        subjects: ['Math'],
        availability: { Monday: ['morning'] },
        grade: '5-6 grades',
      },
    ];

    const result = matchTutorsToStudents(tutors, students);
    expect(result[0].matches[0].tutorId).toBe('t1');
  });
});
