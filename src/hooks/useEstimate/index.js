import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { firebase } from "./../../libs/firebase";

const initialState = {
  type: null,
  value: null,
};

export default function useEstimate() {
  const { ratedMovies } = useSelector((state) => state.userData);
  const { profile } = useSelector((state) => state.userProfile);

  const [props, setProps] = useState(initialState);

  const { type, value } = props;

  useEffect(() => {
    if (type === "rate") {
      firebase
        .firestore()
        .collection(`${profile.displayName}`)
        .doc("moviesrated")
        .update({
          list: ratedMovies
            .filter((item) => +item.id !== +value.id)
            .concat(value),
        })
        .then(() => {
          setProps(initialState);
        })
        .catch(() => {
          setProps(initialState);
        });
    } else if (type === "unrate") {
      firebase
        .firestore()
        .collection(`${profile.displayName}`)
        .doc("moviesrated")
        .update({ list: ratedMovies.filter((item) => +item.id !== +value) })
        .then(() => {
          setProps(initialState);
        })
        .catch(() => {
          setProps(initialState);
        });
    }
  }, [props]);

  return [setProps];
}
