export default function getCharacterByRole(array, role) {
  let result = [];

  if (array.length > 0) {
    result =
      array
        .filter((item) => item.job === role)
        .slice(0, 3)
        .map((item) => item.name)
        .join(", ") || "Unknown";
    console.log(result);
  } else {
    result = "Unknown";
  }
  return result;
}
