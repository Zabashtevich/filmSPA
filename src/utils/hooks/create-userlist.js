export default function createUserlist(item, list) {
  const result = list.filter(movie.id !== item.id);

  return result.push(item);
}
