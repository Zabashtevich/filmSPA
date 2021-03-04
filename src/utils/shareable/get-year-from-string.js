export default function getYearFromString(string) {
  return string.split("-")[0] || "Unknown";
}
