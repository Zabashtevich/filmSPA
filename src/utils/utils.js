export function range(start, end) {
  return [...Array(end)].map((_, index) => index + start);
}
