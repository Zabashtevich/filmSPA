import { firebase } from "../../libs/firebase";

export default function useFirestore() {
  function firestoreListener(username, doc) {
    return firebase.firestore().collection(`${username}`).doc(`${doc}`);
  }

  return { firestoreListener };
}
