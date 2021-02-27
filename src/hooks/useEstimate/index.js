import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { firebase } from "./../../libs/firebase";
import { useModalContext } from "./../../context";

const initialState = {
  type: null,
  value: null,
};

export default function useEstimate() {
  const userData = useSelector((state) => state.userData);
  const userProfile = useSelector((state) => state.userProfile);

  const [props, setProps] = useState(initialState);

  const [, modalinterface] = useModalContext();

  const { type, value } = props;
  const { ratedMovies, loading } = userData;
  const { showErrorModal, showProcessingWindow, closeModal } = modalinterface;

  useEffect(() => {
    if (!loading && type === "rate") {
      showProcessingWindow("Processing your vote :3");
      firebase
        .firestore()
        .collection(`${userProfile.displayName}`)
        .doc("moviesrated")
        .update({
          list: ratedMovies
            .filter((item) => +item.id !== +value.id)
            .concat(value),
        })
        .then(() => {
          closeModal();
          setProps(initialState);
        })
        .catch(() => {
          closeModal();
          showErrorModal("Something gone wrong. The vote was not saved :c");
          setProps(initialState);
        });
    } else if (!loading && type === "unrate") {
      showProcessingWindow("Deleting your vote");
      firebase
        .firestore()
        .collection(`${userProfile.displayName}`)
        .doc("moviesrated")
        .update({ list: ratedMovies.filter((item) => +item.id !== +value) })
        .then(() => {
          closeModal();
          setProps(initialState);
        })
        .catch(() => {
          closeModal();
          showErrorModal("Something gone wrong. The vote was not deleted :c");
          setProps(initialState);
        });
    }
  }, [loading, props]);

  return [setProps];
}
