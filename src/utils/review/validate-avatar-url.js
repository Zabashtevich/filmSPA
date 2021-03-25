import { w200miniature } from "../../constants/constants";

export default function validateAvatarUrl(url) {
  console.log(url);
  return url === null
    ? null
    : url.startsWith("/https")
    ? url.substr(1)
    : `${w200miniature + url}`;
}
