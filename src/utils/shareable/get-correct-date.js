export default function getCorrectDate() {
  const date = new Date();

  return `${date.getUTCFullYear()}/${
    date.getUTCMonth() + 1
  }/${date.getUTCDate()}`;
}
