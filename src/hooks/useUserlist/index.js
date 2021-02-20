import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { useModalContext } from "./../../context";
import { firebase } from "./../../libs/firebase";

export default function useUserlist(nickname) {
  const [props, setProps] = useState({ type: null, value: null });

  const userData = useSelector((store) => store.userData);
  const [, modalinterface] = useModalContext();

  const { loading, userlists } = userData;
  const {
    showProcessingWindow,
    closeProcessingWindow,
    showErrorModal,
  } = modalinterface;
  const { value, type } = props;

  useEffect(() => {
    if (!loading && type === "create") {
      showProcessingWindow("Creating your list");
      firebase
        .firestore()
        .collection(nickname)
        .doc("collection")
        .update({ list: userlists.concat(value) })
        .then(() => {
          closeProcessingWindow();
          setProps({ type: null, value: null });
        })
        .catch(() => {
          closeProcessingWindow();
          showErrorModal("Something gone wrong. The list was not created.");
          setProps({ type: null, value: null });
        });
    } else if (!loading && type === "delete") {
      showProcessingWindow("Deleting your list");
      firebase
        .firestore()
        .collection(nickname)
        .doc("collection")
        .update({ list: userlists.filter((item) => +item.id !== +value) })
        .then(() => {
          closeProcessingWindow();
          setProps({ type: null, value: null });
        })
        .catch(() => {
          closeProcessingWindow();
          showErrorModal("Something gone wrong. The list was not created.");
          setProps({ type: null, value: null });
        });
    }
  }, [loading, props]);

  return [setProps];
}
