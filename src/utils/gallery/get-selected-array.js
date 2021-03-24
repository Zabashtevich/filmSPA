export default function getSelectedArray(selected, content) {
  return (
    (selected === "Posters" && content.posters) ||
    (selected === "Backdrops" && content.backdrops) ||
    (selected === "Videos" && content.videos)
  );
}
