export default function getPopularQuerry(type, value) {
  const tv = ["popular", "airing_today", "latest"];
  const person = ["popular", "latest"];
  const movie = ["popular", "latest", "upcomming"];

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
