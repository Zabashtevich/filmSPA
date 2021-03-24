export default function getOffsetEnd(active, amount) {
  return amount - active <= 5 ? amount : active + 9;
}
