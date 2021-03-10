import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { firebase } from "./../../libs/firebase";
import { useModalContext, useProcessContext } from "./../../context";

const initialState = {
  type: null,
  value: null,
};

export default function useEstimate() {
  const { ratedMovies } = useSelector((state) => state.userData);
  const { profile } = useSelector((state) => state.userProfile);

  const [props, setProps] = useState(initialState);

  const [, { showModal }] = useModalContext();
  const [, { showProcessWindow, closeProcessWindow }] = useProcessContext();

  const { type, value } = props;

  useEffect(() => {
    if (type === "rate") {
      showProcessWindow({
        message: "Processing your vote :3",
        type: "estimateProcess",
      });
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
          closeProcessWindow({ type: "estimateProcess" });
          setProps(initialState);
        })
        .catch(() => {
          closeProcessWindow({ type: "estimateProcess" });
          showModal({
            type: "error",
            message: '"Something gone wrong. The vote was not saved :c"',
          });
          setProps(initialState);
        });
    } else if (type === "unrate") {
      showProcessWindow({
        message: "Deleting your vote",
        type: "estimateProcess",
      });
      firebase
        .firestore()
        .collection(`${profile.displayName}`)
        .doc("moviesrated")
        .update({ list: ratedMovies.filter((item) => +item.id !== +value) })
        .then(() => {
          closeProcessWindow({ type: "estimateProcess" });
          setProps(initialState);
        })
        .catch(() => {
          closeProcessWindow({ type: "estimateProcess" });
          showModal({
            type: "error",
            message: "Something gone wrong. The vote was not deleted :c",
          });
          setProps(initialState);
        });
    }
  }, [props]);

  return [setProps];
}
