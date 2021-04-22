export default function getUniqueArray(array) {
  const names = [];
  const result = [];

  array.map((item) => {
    if (!names.includes(item.name)) {
      names.push(item.name);
      result.push(item);
    }
  });
  return result;
}
