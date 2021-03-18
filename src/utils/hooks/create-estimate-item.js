export default function createEstimateItem(item, value, type = "Movie") {
  return {
    date: new Date(),
    id: item.id,
    type: item.media_type || type,
    title: item.orinal_name || item.title || item.name,
    release_date: item.release_date || item.first_air_date,
    average: item.vote_average,
    count: item.vote_count,
    popularity: item.popularity,
    value,
  };
}
