import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { firebase } from "./../../libs/firebase";

const initialState = {
  type: null,
  value: null,
};

export default function useFavorite() {
  const { loading, favoritedMovies } = useSelector((state) => state.userData);
  const { profile } = useSelector((state) => state.userProfile);

  const [props, setProps] = useState(initialState);

  const { type, value } = props;

  useEffect(() => {
    if (!loading && type === "favorite") {
      firebase
        .firestore()
        .collection(`${profile.displayName}`)
        .doc("collection")
        .update({ favorite: favoritedMovies.concat(value) })
        .then(() => {
          setProps(initialState);
        })
        .catch(() => {
          setProps(initialState);
        });
    } else if (!loading && type === "unfavorite") {
      firebase
        .firestore()
        .collection(`${profile.displayName}`)
        .doc("collection")
        .update({
          favorite: favoritedMovies.filter((item) => +item.id !== +value),
        })
        .then(() => {
          setProps(initialState);
        })
        .catch(() => {
          setProps(initialState);
        });
    }
  }, [loading, props]);

  return [setProps];
}
