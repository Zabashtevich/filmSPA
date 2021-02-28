import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { firebase } from "./../../libs/firebase";
import { useModalContext } from "./../../context";

const initialState = {
  type: null,
  value: null,
};

export default function useFavorite() {
  const [, { addFavorite, closeModal, showErrorModal }] = useModalContext();
  const { loading, favoritedMovies } = useSelector((state) => state.userData);
  const userProfile = useSelector((state) => state.userProfile);

  const [props, setProps] = useState(initialState);

  const { type, value } = props;

  useEffect(() => {
    if (!loading && type === "favorite") {
      addFavorite("Processing...");
      firebase
        .firestore()
        .collection(`${userProfile.displayName}`)
        .doc("collection")
        .update({ favorite: favoritedMovies.concat(value) })
        .then(() => {
          closeModal();
          setProps(initialState);
        })
        .catch(() => {
          closeModal();
          showErrorModal("Something gone wrong. Movie was not favorited :c");
          setProps(initialState);
        });
    } else if (!loading && type === "unfavorite") {
      addFavorite("Processing...");
      firebase
        .firestore()
        .collection(`${userProfile.displayName}`)
        .doc("collection")
        .update({
          favorite: favoritedMovies.filter((item) => +item.id !== +value),
        })
        .then(() => {
          closeModal();
          setProps(initialState);
        })
        .catch(() => {
          closeModal();
          showErrorModal("Something gone wrong. Movie was not unfavorited");
          setProps(initialState);
        });
    }
  }, [loading, props]);

  return [setProps];
}
