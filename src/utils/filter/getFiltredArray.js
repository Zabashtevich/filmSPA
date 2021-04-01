import { sortMoviesByDate } from "..";

export default function getFiltredArray(array, state) {
  const { sortBy, itemType, listType, userlist, start, end, touched } = state;

  let result = null;

  switch (sortBy) {
    case "date":
      result = sortMoviesByDate(array);
      break;
    case "popularity":
      result = array.sort((prev, item) => item.popularity - prev.popularity);
    case "yourVoteValue":
      result = array.sort((prev, item) => item.value - prev.value);

      break;
      break;
    default:
      break;
  }
}
