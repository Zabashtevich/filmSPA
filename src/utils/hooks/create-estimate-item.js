export default function createEstimateItem(item, value) {
  return {
    time: new Date(),
    id: item.id,
    type: item.media_type,
    genres: item.genre_ids,
    title: item.orinal_name || item.title || item.name,
    average: item.vote_average,
    count: item.vote_count,
    popularity: item.popularity,
    value,
  };
}
