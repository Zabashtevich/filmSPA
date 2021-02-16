import { firebase } from "./../../libs/firebase";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function rate(value, item) {}
const history = useHistory();
const userProfile = useSelector();
const { profile, profileLoading } = userProfile;

useEffect(() => {}, []);
export const rateLogic = () => {
  if (user === null) {
    history.push("/authentication/login");
  } else {
    firebase
      .firestore()
      .collection(`${user.displayName}`)
      .doc(`moviesrated`)
      .update({
        list: [
          ...userData.filter((card) => card.id !== item.id),
          { ...item, value: rateScore, time: new Date().getTime() },
        ],
      })
      .catch((error) => showErrorModal(error));
  }
};
