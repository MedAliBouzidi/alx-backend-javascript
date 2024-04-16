export default function cleanSet(set, startString) {
  if (startString.length === 0 || startString === undefined) return '';
  return Array.from(set)
    .filter((item) => item.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
}
