import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { firebase } from "./../../libs/firebase";
import { useModalContext } from "./../../context";

export default function useRate(nickname) {
  const [value, setValue] = useState(null);

  const userData = useSelector((state) => state.userData);
  const [, modalController] = useModalContext();

  const { loading, ratedMovies } = userData;
  const {
    showProcessingWindow,
    closeProcessingWindow,
    showErorModal,
  } = modalController;

  useEffect(() => {
    if (!loading && value !== null) {
      showProcessingWindow("Processing your estimate");
      firebase
        .firestore()
        .collection(nickname)
        .doc("moviesrated")
        .update({ list: ratedMovies.concat(value) })
        .then(() => {
          closeProcessingWindow();
          setValue(null);
        })
        .catch(() => {
          closeProcessingWindow();
          showErorModal("Something gone wrong :c");
          setValue(null);
        });
    }
  }, [loading, value]);

  return [setValue];
}
