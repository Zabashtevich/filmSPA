export default function createUserlistItem(item) {
  return {
    id: item.id,
    title: item.title,
    date: item.release_date,
    vote: item.vote_count,
    average: item.vote_average,
    time: new Date(),
  };
}
