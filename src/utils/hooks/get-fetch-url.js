export default function getFetchUrl(target, type, period, page, querries) {
  const appendQuerries = {
    tv:
      "append_to_response=credits,recommendations,images,videos,reviews,account_states&",
    movie:
      "append_to_response=credits,recommendations,images,videos,reviews,account_states&",
    person: "append_to_response=combined_credits,images&",
  };

  target = (period && `${target}`) || `${target}?`;
  period = (period && `/${period}?`) || "";
  querries = (querries && appendQuerries[type]) || "";
  page = (page && `&page=${page}`) || "";

  return `https://api.themoviedb.org/3/${type}/${target}${period}${querries}api_key=${process.env.REACT_APP_API_KEY}${page}`;
}
