export default function updateStudentGradeByCity(
  studentsList,
  city,
  newGrades,
) {
  if (!Array.isArray(studentsList)) {
    return [];
  }
  return studentsList
    .filter((student) => student.location === city)
    .map((student) => {
      const ng = newGrades.filter((grade) => grade.studentId === student.id);
      if (ng) {
        return {
          ...student,
          grade: ng.grade,
        };
      }
      return { ...student, grade: 'N/A' };
    });
}
