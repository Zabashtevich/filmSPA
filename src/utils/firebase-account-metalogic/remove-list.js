import { firebase } from "./../libs/firebase";

export default function removeList(id, userlists, nickname) {
  return firebase
    .firestore()
    .collection(`${nickname}`)
    .doc("collection")
    .update({ list: [...userlists.filter((item) => +item.id !== id)] });
}
