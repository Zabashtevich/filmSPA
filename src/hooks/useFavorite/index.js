import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { firebase } from "./../../libs/firebase";
import { useModalContext } from "./../../context";

export default function useFavorite(nickname) {
  const [props, setProps] = useState({
    type: null,
    value: null,
    sucess: null,
  });

  const userData = useSelector((state) => state.userData);
  const [, modalinterface] = useModalContext();
  const { type, value, sucess } = props;
  const { loading, favoritedMovies } = userData;
  const { showProcessingWindow, closeModal, showErrorModal } = modalinterface;

  useEffect(() => {
    if (!loading && type === "favorite") {
      showProcessingWindow("Processing...");
      firebase
        .firestore()
        .collection(`${nickname}`)
        .doc("collection")
        .update({ favorite: favoritedMovies.concat(value) })
        .then(() => {
          closeModal();
          setProps({ type: null, value: null, sucess: true });
        })
        .catch(() => {
          closeModal();
          showErrorModal("Something gone wrong. Movie was not favorited :c");
          setProps({ type: null, value: null, sucess: false });
        });
    } else if (!loading && type === "unfavorite") {
      showProcessingWindow("Processing...");
      firebase
        .firestore()
        .collection(`${nickname}`)
        .doc("collection")
        .update({
          favorite: favoritedMovies.filter((item) => +item.id !== +value),
        })
        .then(() => {
          closeModal();
          setProps({ type: null, value: null, sucess: true });
        })
        .catch(() => {
          closeModal();
          showErrorModal("Something gone wrong. Movie was not unfavorited");
          setProps({ type: null, value: null, sucess: false });
        });
    }
  }, [loading, props]);

  return [sucess, setProps];
}
