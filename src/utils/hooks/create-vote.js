export default function createVote(item, value, type = "movie") {
  return {
    date: Date.now(),
    id: item.id,
    type: item.media_type || type,
    title: item.orinal_name || item.title || item.name,
    release_date: item.release_date || item.first_air_date,
    vote_average: item.vote_average,
    vote_count: item.vote_count,
    popularity: item.popularity,
    value,
  };
}
