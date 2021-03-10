export default function getYearFromString(string) {
  return string ? string.split("-")[0] : null;
}
