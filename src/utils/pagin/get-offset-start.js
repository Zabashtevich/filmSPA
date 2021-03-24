export default function getOffsetStart(active, amount) {
  return active <= 5 ? 1 : amount - active <= 5 ? amount - 9 : active - 5;
}
