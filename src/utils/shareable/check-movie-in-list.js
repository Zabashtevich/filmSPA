export default function checkMovieInList(list, item) {
  return list.filter((i) => +i.id === +item.id).length > 0 ? true : false;
}
