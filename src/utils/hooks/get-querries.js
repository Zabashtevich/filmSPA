export default function getQuerries(type) {
  return type === "person"
    ? "credits,images"
    : type === "movie"
    ? "credits,recommendations,images,videos,reviews,account_states"
    : null;
}
