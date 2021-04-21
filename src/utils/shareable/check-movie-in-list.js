export default function checkMovieInList(list, id) {
  if (!list) return false;
  return list.find((item) => +item.id === +id);
}
