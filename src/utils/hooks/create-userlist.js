export default function createUserlist(item, list) {
  const result = list.filter((movie) => movie.id !== item.id);
  result.push(item);
  return result;
}
