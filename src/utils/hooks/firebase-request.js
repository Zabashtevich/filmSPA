import { firebase } from "./../../libs/firebase";

export default function firebaseRequest(nickname, collection) {
  return firebase.firestore().collection(`${nickname}`).doc(`${collection}`);
}
