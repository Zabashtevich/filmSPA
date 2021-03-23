export default function checkCategoriesisFilled(obj) {
  return Object.values(obj).some((field) => field !== null);
}
