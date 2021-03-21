export default function getMediaState(data) {
  const backdrops = data?.images?.backdrops || null;
  const videos = data?.videos?.results || null;
  const posters = data?.images?.posters || null;

  const visible = !!posters || !!backdrops || !!videos;
  const tabs =
    (visible && [
      backdrops && "Backdrops",
      videos && "Videos",
      posters && "Posters",
    ]) ||
    null;
  const active = (tabs && tabs[0]) || null;

  return {
    visible,
    tabs,
    videos,
    backdrops,
    posters,
    active,
  };
}
