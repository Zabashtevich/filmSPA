export default function getMoneyFormat(money) {
  if (!money) return "Unknown";
  return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " $";
}
