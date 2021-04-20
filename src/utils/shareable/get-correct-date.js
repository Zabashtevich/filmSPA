export default function getCorrectDate(timestamp) {
  const date = new Date(timestamp);

  return `${date.getUTCFullYear()}/${
    date.getUTCMonth() + 1
  }/${date.getUTCDate()}`;
}
