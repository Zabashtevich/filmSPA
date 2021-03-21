export default function getMediaTabs(obj) {
  const tabs = Object.entries(obj).reduce((acc, [key, val]) => {
    if (val) acc.push(key);
    return acc;
  }, []);
  return { tabs, active: tabs[0] };
}
