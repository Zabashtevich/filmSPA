import { getYearFromString, sortMoviesByDate } from "..";

export default function getFiltredArray(array, state) {
  const { sortBy, type, primaryYear, secondaryYear } = state;

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

  if (type !== "all") {
    result = result.filter((item) => item.type === type);
  }

  result = result.filter(
    (item) =>
      +getYearFromString(item.release_date) >=
        ((primaryYear === "all" && 1950) || primaryYear) &&
      +getYearFromString(item.release_date) <=
        ((secondaryYear === "all" && 2021) || secondaryYear),
  );
  return result;
}
