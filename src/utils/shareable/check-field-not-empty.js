export default function checkFieldNotEmpty(obj) {
  return Object.values(obj).some((field) => field !== null);
}
