export default function checkMovieInList(list, id) {
  return list.find((item) => +item.id === +id);
}
