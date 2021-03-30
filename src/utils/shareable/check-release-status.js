export default function checkReleaseStatus(date) {
  return Date.now() > new Date(date).getTime();
}
