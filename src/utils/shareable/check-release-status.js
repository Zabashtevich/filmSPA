export default function checkReleaseStatus(date) {
  const actualYear = new Date().getFullYear();
  const actualMonth = new Date().getMonth() + 1;
  if (!date) {
    return false;
  }

  const splittedDate = date.split("-");

  return splittedDate[0] > actualYear
    ? false
    : splittedDate[1] > actualMonth
    ? false
    : true;
}
