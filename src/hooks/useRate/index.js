import { useSelector } from "react-redux";
import { useModalContext, useWarningContext } from "../../context";
import { firebase } from "../../libs/firebase";

export default function useRate(value, item) {
  const userProfile = useSelector();
  const userData = useSelector((store) => store.userData);
  const { profile } = userProfile;
  const { showModal } = modalinterface;
  const { show, close } = warninginterface;
  const { ratedMovies } = userData;
  const [, warninginterface] = useWarningContext();
  const [, modalinterface] = useModalContext();

  if (user === null) {
    showModal("error", "Sorry, but you need to login before rate something");
  } else {
    const date = new Date();
    show("Processing your vote");
    firebase
      .firestore()
      .collection(`${profile.displayName}`)
      .doc(`moviesrated`)
      .update({
        list: [
          ...ratedMovies.filter((card) => card.id !== item.id),
          {
            title: item.title,
            id: item.id,
            value: value,
            time: `${date.getUTCFullYear()}/${
              date.getUTCMonth() + 1
            }/${date.getUTCDate()}`,
          },
        ],
      })
      .then(() => close())
      .catch(() =>
        showModal("error", "Something went wrong, try to rate later :c"),
      );
  }
}
