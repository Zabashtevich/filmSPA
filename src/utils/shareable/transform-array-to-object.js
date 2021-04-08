export default function transformArrayToObject(array) {
  const result = array.reduce((acc, item) => {
    const key = Object.keys(item);
    acc[key[0]] = item[key[0]];
    return acc;
  }, {});

  return result;
}
