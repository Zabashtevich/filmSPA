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
      case

    default:
      break;
  }
}
