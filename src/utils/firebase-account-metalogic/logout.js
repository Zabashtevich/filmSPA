import { firebase } from "../../libs/firebase";
import { useHistory } from "react-router-dom";

export default function logoutLogic() {
  const history = useHistory();
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
