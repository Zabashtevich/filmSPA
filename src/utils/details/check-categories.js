export default function checkCategories(data) {
  return (
    videos.results in data || images.posters in data || images.backdrops in data
  );
}
