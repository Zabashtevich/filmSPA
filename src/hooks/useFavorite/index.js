import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { firebase } from "./../../libs/firebase";
import { useModalContext } from "./../../context";

export default function useFavorite(nickname) {
  const [props, setProps] = useState({ type: null, value: null });

  const userData = useSelector((state) => state.userData);
  const [, modalinterface] = useModalContext();

  const { type, value } = props;
  const { loading, favoritedMovies } = userData;
  const {
    showProccesingWindow,
    closeProcessingWindow,
    showErrorModal,
  } = modalinterface;

  useEffect(() => {
    if (!loading && type === "favorite") {
      showProccesingWindow("Processing your vote");
      firebase
        .firestore()
        .collection(nickname)
        .doc("collection")
        .update({ favorite: favoritedMovies.concat(value) })
        .then(() => {
          closeProcessingWindow();
          setProps({ type: null, value: null });
        })
        .catch(() => {
          closeProcessingWindow();
          showErrorModal("Something gone wrong. Movie was not favorited :c");
          setProps({ type: null, value: null });
        });
    }
  }, [loading, props]);

  return [setProps];
}
