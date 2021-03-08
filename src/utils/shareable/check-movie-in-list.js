export default function checkMovieInList(list, id) {
  return list.filter((item) => +item.id === +id).length > 0 ? true : false;
}
