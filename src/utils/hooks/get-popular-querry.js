export default function getPopularQuerry(type, value) {
  const tv = ["popular", "top_rated", "airing_today"];
  const person = ["popular"];
  const movie = ["popular", "top_rated", "upcoming"];

  switch (type) {
    case "tv":
      return tv[value];
    case "movie":
      return movie[value];
    case "person":
      return person[value];
    default:
      return null;
  }
}
