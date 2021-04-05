export default function getErrorList(errors) {
  return Object.keys(errors).map((item) => errors[item].message);
}
