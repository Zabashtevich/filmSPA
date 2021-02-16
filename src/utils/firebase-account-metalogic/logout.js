import { firebase } from "../../libs/firebase";

export default function logoutLogic(history) {
  firebase
    .auth()
    .signOut()
    .then(() => {
      history.push("/");
    })
    .catch(() => {
      //TODO ERROR MODAL
    });
}
