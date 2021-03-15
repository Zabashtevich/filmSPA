export default function getFetchUrl(type, value, page) {
  const key = `${process.env.REACT_APP_API_KEY}`;
  const basicUrl = `https://api.themoviedb.org/3/`;

  const detailsQuerry =
    "credits,recommendations,images,videos,reviews,account_states";
  const personQuerry = "combined_credits,images";

  const tv = ["popular", "top_rated", "airing_today"];
  const person = ["popular"];
  const movie = ["popular", "top_rated", "upcoming"];

  const trending = ["day", "week", "month"];

  switch (type) {
    case "tv":
      if (value > 5 && page === null) {
        return `${basicUrl}${type}/${value}?api_key=${key}&&append_to_response=${detailsQuerry}`;
      } else if (value < 5 && page !== null) {
        return `${basicUrl}trending/${type}/${trending[value]}?api_key=${key}&&page=${page}`;
      } else {
        return `${basicUrl}${type}/${tv[value]}?api_key=${key}`;
      }
    case "movie":
      if (value > 5 && page === null) {
        return `${basicUrl}${type}/${value}?api_key=${key}&&append_to_response=${detailsQuerry}`;
      } else if (value < 5 && page !== null) {
        return `${basicUrl}trending/${type}/${trending[value]}?api_key=${key}&&page=${page}`;
      } else {
        return `${basicUrl}${type}/${movie[value]}?api_key=${key}`;
      }
    case "person":
      if (value > 5) {
        return `${basicUrl}${type}/${value}?api_key=${key}&&append_to_response=${personQuerry}`;
      } else {
        return `${basicUrl}${type}/${person[value]}?api_key=${key}`;
      }
    case "all":
      console.log(page);
      return `${basicUrl}trending/${type}/${trending[value]}?api_key=${key}&&page=${page}`;
    default:
      return null;
  }
}
