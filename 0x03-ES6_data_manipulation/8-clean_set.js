export default function cleanSet(set, startString) {
  if (
    !set
    || !startString
    || startString === undefined
    || startString.length == 0
  ) return '';

  const newSet = new Set();
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      newSet.add(value);
    }
  });
  return Array.from(newSet)
    .map((value) => value.slice(startString.length))
    .join('-');
}
