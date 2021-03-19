import { getYearFromString } from "..";

export default function getFiltredArray(array, state) {
  const { sortBy, rating, rangeStart, rangeEnd } = state;
  let result = [];

  switch (sortBy) {
    case "date":
      result = [
        ...array.sort(
          (first, second) => second.release_date - first.release_date,
        ),
      ];
      break;
    case "popular":
      result = [
        ...array.sort((first, second) => second.popularity - first.popularity),
      ];
      break;
    case "rating":
      result = [
        ...array.sort(
          (first, second) => second.vote_average - first.vote_average,
        ),
      ];
      break;
    case "score":
      result = [...array.sort((first, second) => second.value - first.value)];
      console.log(result);

      break;
    case "votes":
      result = [
        ...array.sort((first, second) => second.vote_count - first.vote_count),
      ];
      break;
    default:
      result = [];
      break;
  }
  if (rating !== "all") {
    result = result.filter((item) => item.value !== rating);
  }
  if (rangeStart !== null || rangeStart !== null) {
    rangeStart = rangeStart ?? 1940;
    rangeEnd = rangeEnd ?? 2021;

    result = result.filter(
      (item) =>
        getYearFromString(item.release_date) >= rangeStart &&
        getYearFromString(item.release_date) <= rangeEnd,
    );
  }
  return result;
}
