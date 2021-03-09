export default function getSortedByType(array) {
  return array.reduce((acc, item) => {
    console.log(acc);
    if (item.media_type in acc) {
      acc[`${item.media_type}`].push(item);
    } else {
      acc[item.media_type] = [];
    }
    return acc;
  }, {});
}
