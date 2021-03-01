import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { firebase } from "./../../libs/firebase";
import { useModalContext, useProcessContext } from "./../../context";

const initialState = {
  type: null,
  value: null,
};

export default function useFavorite() {
  const [, { showModal }] = useModalContext();
  const [, { showProcessWindow, closeProcessWindow }] = useProcessContext();
  const { loading, favoritedMovies } = useSelector((state) => state.userData);
  const { profile } = useSelector((state) => state.userProfile);

  const [props, setProps] = useState(initialState);

  const { type, value } = props;

  useEffect(() => {
    if (!loading && type === "favorite") {
      showProcessWindow({
        type: "favoriteProcess",
        message: '"Processing..."',
      });
      firebase
        .firestore()
        .collection(`${profile.displayName}`)
        .doc("collection")
        .update({ favorite: favoritedMovies.concat(value) })
        .then(() => {
          closeProcessWindow({ type: "favoriteProcess" });
          setProps(initialState);
        })
        .catch(() => {
          closeProcessWindow({ type: "favoriteProcess" });
          showModal({
            type: "error",
            message: "Something gone wrong. Movie was not favorited :c",
          });
          setProps(initialState);
        });
    } else if (!loading && type === "unfavorite") {
      showProcessWindow({
        type: "favoriteProcess",
        message: '"Processing..."',
      });
      firebase
        .firestore()
        .collection(`${profile.displayName}`)
        .doc("collection")
        .update({
          favorite: favoritedMovies.filter((item) => +item.id !== +value),
        })
        .then(() => {
          closeProcessWindow({ type: "favoriteProcess" });
          setProps(initialState);
        })
        .catch(() => {
          closeProcessWindow({ type: "favoriteProcess" });
          showModal({
            type: "error",
            message: '"Something gone wrong. Movie was not unfavorited"',
          });
          setProps(initialState);
        });
    }
  }, [loading, props]);

  return [setProps];
}
