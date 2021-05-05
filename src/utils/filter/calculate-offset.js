export default function calculateOffset(primaryYear) {
  let year, amount;

  if (primaryYear === "all") {
    year = 1950;
    amount = 72;
  } else {
    year = primaryYear;
    amount = 2022 - primaryYear;
  }

  return { year, amount };
}
