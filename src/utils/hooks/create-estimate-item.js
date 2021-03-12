export default function createEstimateItem(item, value, type = "Movie") {
  return {
    date: new Date(),
    id: item.id,
    type,
    genres: item.genres,
    title: item.orinal_name || item.title || item.name,
    average: item.vote_average,
    count: item.vote_count,
    popularity: item.popularity,
    value,
  };
}
