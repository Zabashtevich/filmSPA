import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { firebase } from "./../../libs/firebase";
import { useModalContext } from "./../../context";

export default function useEstimate(nickname) {
  const [props, setProps] = useState({
    type: null,
    value: null,
    sucess: null,
  });

  const userData = useSelector((state) => state.userData);
  const [, modalinterface] = useModalContext();

  const { type, value, sucess } = props;
  const { ratedMovies, loading } = userData;
  const { showErrorModal, showProcessingWindow, closeModal } = modalinterface;

  useEffect(() => {
    if (!loading && type === "rate") {
      showProcessingWindow("Processing your vote :3");
      firebase
        .firestore()
        .collection(`${nickname}`)
        .doc("moviesrated")
        .update({
          list: ratedMovies
            .filter((item) => +item.id !== +value.id)
            .concat(value),
        })
        .then(() => {
          closeModal();
          setProps({ type: null, value: null, sucess: true });
        })
        .catch(() => {
          closeModal();
          showErrorModal("Something gone wrong. The vote was not saved :c");
          setProps({ type: null, value: null, sucess: false });
        });
    } else if (!loading && type === "unrate") {
      showProcessingWindow("Deleting your vote");
      firebase
        .firestore()
        .collection(`${nickname}`)
        .doc("moviesrated")
        .update({ list: ratedMovies.filter((item) => +item.id !== +value) })
        .then(() => {
          closeModal();
          setProps({ type: null, value: null, sucess: true });
        })
        .catch(() => {
          closeModal();
          showErrorModal("Something gone wrong. The vote was not deleted :c");
          setProps({ type: null, value: null, sucess: false });
        });
    }
  }, [loading, props]);

  return [sucess, setProps];
}
