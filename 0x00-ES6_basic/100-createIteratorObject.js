export default function createIteratorObject(report) {
  const res = [];
  for (const val of Object.values(report.allEmployees)) {
    res.push(...val);
  }
  return res;
}
