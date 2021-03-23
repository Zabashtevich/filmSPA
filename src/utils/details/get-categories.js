export default function getCategories(data) {
  const arrays = {
    posters: data?.images?.posters || null,
    videos: data?.videos?.results || null,
    backdrops: data?.images?.backdrops || null,
  };

  const categories = Object.entries(arrays).reduce((acc, [key, val]) => {
    if (val) acc.push(key[0].toUpperCase() + key.slice(1));
    return acc;
  }, []);

  return { categories, active: categories[0], content: arrays };
}
