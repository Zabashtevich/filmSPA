import { splitDate } from "..";

export default function sortMoviesByDate(array) {
  const result = array.sort(
    (a, b) =>
      splitDate(b.release_date || b.first_air_date) -
      splitDate(a.release_date || a.first_air_date),
  );

  return [
    ...result.filter(
      (item) => item.release_date === "" || item.first_air_date === "",
    ),
    ...result.filter((item) => !!item.release_date || !!item.first_air_date),
  ];
}
