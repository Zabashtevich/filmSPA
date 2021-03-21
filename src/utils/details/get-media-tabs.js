export default function getMediaTabs(obj) {
  const tabs = Object.entries(obj).reduce((acc, [key, val]) => {
    if (val) acc.push(key[0].toUpperCase() + key.slice(1));
    return acc;
  }, []);
  return { tabs, active: tabs[0] };
}
