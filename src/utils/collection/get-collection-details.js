import { getUniqueArray, getMoviesData } from "..";

export default async function getCollectionDetails(movies) {
  const moviesDetails = await getMoviesData(movies);

  const reducedDetails = moviesDetails.reduce(
    (acc, item) => {
      acc.revenue = acc.revenue + (item?.revenue || 0);
      acc.cast.push(...item.credits.cast.slice(0, 15));
      acc.crew.push(...item.credits.crew.slice(0, 15));
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
