export default function getStudentIdsSum(studentsList) {
  if (!Array.isArray(studentsList)) {
    return [];
  }
  return studentsList.reduce((sum, student) => sum + student.id, 0);
}
