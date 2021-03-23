export default function checkCategories(data) {
  return (
    data?.videos?.results || data?.images?.posters || data?.images?.backdrops
  );
}
