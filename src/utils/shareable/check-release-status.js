export default function checkReleaseStatus(date) {
  const actualYear = new Date().getFullYear();
  const actualMonth = new Date().getMonth() + 1;
  if (!date) {
    return false;
  }

  const splittedDate = date.split("-");

  return actualYear > +splittedDate[0]
    ? true
    : actualMonth > +splittedDate[1]
    ? true
    : false;
}
