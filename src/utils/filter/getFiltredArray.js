import { getYearFromString, sortMoviesByDate } from "..";

export default function getFiltredArray(array, state) {
  const { sortBy, itemType, start = 1950, end = 2021 } = state;

  let result = null;

  switch (sortBy) {
    case "date":
      result = sortMoviesByDate(array);
      break;
    case "popularity":
      result = array.sort(
        (prev, item) =>
          Math.floor(item.popularity) - Math.floor(prev.popularity),
      );
      break;
    case "yourVoteValue":
      result = array.sort((prev, item) => item.value - prev.value);
      break;
    case "voteCount":
      result = array.sort((prev, item) => +item.vote_count - +prev.vote_count);
      break;
    case "voteAverage":
      result = array.sort(
        (prev, item) => item.vote_average - prev.vote_average,
      );
      break;
    default:
      break;
  }

  if (itemType) {
    result = result.filter((item) => item.type === itemType);
  }

  result = result.filter(
    (item) =>
      +getYearFromString(item.release_date) >=
        ((start === "all" && 1950) || start) &&
      +getYearFromString(item.release_date) <= ((end === "all" && 2021) || end),
  );
  return result;
}
