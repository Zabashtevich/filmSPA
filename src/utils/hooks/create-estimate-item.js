export default function createEstimateItem(item, value, type = "Movie") {
  return {
    date: new Date(),
    id: item.id,
    type: item.media_type || type,
    title: item.orinal_name || item.title || item.name,
    average: item.vote_average,
    count: item.vote_count,
    popularity: item.popularity,
    value,
  };
}
