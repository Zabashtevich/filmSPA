export default function checkReleaseStatus(date) {
  return date === "" ? false : Date.now() > new Date(date).getTime();
}
