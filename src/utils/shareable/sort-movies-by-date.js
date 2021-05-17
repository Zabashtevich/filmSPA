export default function sortMoviesByDate(array) {
  const result = array.sort(
    (a, b) =>
      new Date(b.release_date || b.first_air_date).getFullYear() -
      new Date(a.release_date || a.first_air_date).getFullYear(),
  );

  return [
    ...result.filter(
      (item) => item.release_date === "" || item.first_air_date === "",
    ),
    ...result.filter((item) => !!item.release_date || !!item.first_air_date),
  ];
}
