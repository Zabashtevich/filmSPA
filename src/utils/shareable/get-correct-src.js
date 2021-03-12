import { w200miniature } from "../../constants/constants";

export default function getCorrectSrc(src) {
  if (src.includes("https")) {
    return src.substr(1);
  } else {
    return `${w200miniature + src}`;
  }
}
