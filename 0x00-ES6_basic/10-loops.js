export default function appendToEachArrayValue(array, appendString) {
  const arrayEnd = [];
  for (const idx in array) {
    arrayEnd.push(`${appendString}${idx}`);
  }

  return arrayEnd;
}
