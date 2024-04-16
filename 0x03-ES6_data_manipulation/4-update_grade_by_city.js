export default function updateStudentGradeByCity(
  studentsList,
  city,
  newGrades,
) {
  if (!Array.isArray(studentsList)) {
    return [];
  }
  return studentsList.map((student) => {
    if (student.location === city) {
      const ng = newGrades.find((grade) => grade.studentId === student.id);
      if (ng) {
        return {
          ...student,
          grade: ng.grade,
        };
      }
      return { ...student, grade: 'N/A' };
    }
  });
}
