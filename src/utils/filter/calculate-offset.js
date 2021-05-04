export default function calculateOffset(period) {
  console.log(period);
  let year, amount;

  if (period.start === "all") {
    year = 1950;
    amount = 72;
  } else {
    year = period.start;
    amount = 2022 - period.start;
  }

  return { year, amount };
}
