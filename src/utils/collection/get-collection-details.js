import { getUniqueArray } from "..";

export default async function getCollectionDetails(movies) {
  const moviesDetails = await getMoviesData(movies);
  const reducedDetails = moviesDetails.reduce(
    (acc, item) => {
      acc.revenue = acc.revenue + (item?.revenue || 0);
      acc.cast.push(...item.credits.cast.slice(1, 15));
      acc.crew.push(...item.credits.crew.slice(1, 15));
      return acc;
    },
    {
      revenue: 0,
      cast: [],
      crew: [],
    },
  );

  return {
    ...reducedDetails,
    cast: getUniqueArray(reducedDetails.cast),
    crew: getUniqueArray(reducedDetails.crew),
  };
}

async function getMoviesData(movies) {
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
