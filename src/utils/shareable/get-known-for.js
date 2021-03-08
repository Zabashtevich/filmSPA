export default function getKnownFor(array) {
  return array
    .sort((prev, item) => item.popularity - prev.popularity)
    .splice(0, 10);
}
