import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useModalContext } from "../../context";
import { firebase } from "./../../libs/firebase";

export default function useUnrate(nickname) {
  const [id, setid] = useState(null);

  const userData = useSelector((state) => state.userData);
  const [modalState, modalController] = useModalContext();

  const { loading, ratedMovies } = userData;
  const { accepted } = modalState;
  const {
    showConfirmModal,
    showProcessingWindow,
    closeProcessingWindow,
  } = modalController;

  useEffect(() => {
    if (!loading && id !== null) {
      if (!accepted) {
        showConfirmModal({
          title: "UNRATE",
          message: `Are you sure you want to delete your vote?`,
        });
      } else if (accepted) {
        showProcessingWindow("deleting your vote");
        firebase
          .firestore()
          .collection(nickname)
          .doc("moviesrate")
          .update({ list: [...ratedMovies.filter((item) => +item.id !== id)] })
          .then(() => {
            closeProcessingWindow();
            setid(null);
          });
      }
    }
  }, [id, loading]);

  return [setid];
}
