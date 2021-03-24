export default function getFetchUrl(direction, type, value, page = 1) {
  const key = `${process.env.REACT_APP_API_KEY}`;
  const basicUrl = `https://api.themoviedb.org/3/`;

  const detailsPageQuerry =
    "credits,recommendations,images,videos,reviews,account_states";
  const personPageQuerry = "combined_credits,images";

  switch (direction) {
    case "details":
      return `${basicUrl}${type}/${value}?api_key=${key}&&append_to_response=${detailsPageQuerry}`;
    case "popular":
      return `${basicUrl}${type}/${value}?api_key=${key}`;
    case "trending":
      return `${basicUrl}trending/${type}/${value}?api_key=${key}&&page=${page}`;
    case "actor":
      return `${basicUrl}${type}/${value}?api_key=${key}&&append_to_response=${personPageQuerry}`;
    default:
      return null;
  }
}
