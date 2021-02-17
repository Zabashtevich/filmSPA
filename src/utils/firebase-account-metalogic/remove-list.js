import { useSelector } from "react-redux";
import { firebase } from "./../../libs/firebase";

export default function removeList(id) {
  const userProfile = useSelector((store) => store.userProfile);
  const userData = useSelector((store) => store.userData);

  const { userlists } = userData;

  return firebase
    .firestore()
    .collection(`${userProfile.profile.displayName}`)
    .doc("collection")
    .update({ list: [...userlists.filter((item) => +item.id !== id)] });
}
