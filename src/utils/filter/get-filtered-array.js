import { getYearFromString } from "..";

export default function getFiltredArray(array, state) {
  const { sortBy, rating, rangeStart, rangeEnd } = state;
  const result = [];

  switch (sortBy) {
    case "date":
      result = [
        ...array.sort(
          (first, second) => +first.release_date - +second.release_date,
        ),
      ];
      break;
    case "popular":
      result = [
        ...array.sort(
          (first, second) => +first.popularity - +second.popularity,
        ),
      ];
      break;
    case "rating":
      result = [
        ...array.sort(
          (first, second) => +first.vote_average - +second.vote_average,
        ),
      ];
      break;
    case "score":
      result = [...array.sort((first, second) => first.value - second.value)];
      break;
    case "votes":
      result = [
        ...array.sort(
          (first, second) => first.vote_amount - second.vote_amount,
        ),
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
