export default async function getMoviesData(movies) {
  const moviesDetails = [];
  await Promise.all(
    movies.map(async (item) =>
      fetch(
        `https://api.themoviedb.org/3/movie/${item.id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=credits,recommendations,images,videos,reviews,account_states`,
      ).then((response) => response.json()),
    ),
  ).then((responses) => moviesDetails.push(...responses));
  return moviesDetails;
}
