import { splitDate } from "..";

export default function sortMoviesByDate(array) {
  return array.sort(
    (a, b) =>
      splitDate(b.release_date || b.first_air_date || "1000000-") -
      splitDate(a.release_date || a.first_air_date || "1000000-"),
  );
}
