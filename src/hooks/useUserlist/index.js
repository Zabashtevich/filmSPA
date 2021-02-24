import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { useModalContext } from "./../../context";
import { firebase } from "./../../libs/firebase";

export default function useUserlist(nickname) {
  const [props, setProps] = useState({
    type: null,
    value: null,
    sucess: null,
  });

  const userData = useSelector((store) => store.userData);
  const [, modalinterface] = useModalContext();

  const { loading, userlists } = userData;
  const { showProcessingWindow, closeModal, showErrorModal } = modalinterface;
  const { value, type, sucess } = props;

  useEffect(() => {
    if (!loading && type === "create") {
      showProcessingWindow("Creating your list");
      firebase
        .firestore()
        .collection(`${nickname}`)
        .doc("collection")
        .update({ list: userlists.concat(value) })
        .then(() => {
          closeModal();
          setProps({ type: null, value: null, sucess: true });
        })
        .catch(() => {
          closeModal();
          showErrorModal("Something gone wrong. The list was not created.");
          setProps({ type: null, value: null, sucess: false });
        });
    } else if (!loading && type === "delete") {
      showProcessingWindow("Deleting your list");
      firebase
        .firestore()
        .collection(`${nickname}`)
        .doc("collection")
        .update({ list: userlists.filter((item) => +item.id !== +value) })
        .then(() => {
          closeModal();
          setProps({ type: null, value: null, sucess: true });
        })
        .catch(() => {
          closeModal();
          showErrorModal("Something gone wrong. The list was not created.");
          setProps({ type: null, value: null, sucess: false });
        });
    } else if (!loading && type === "rename") {
      showProcessingWindow("Renaming your list");
      firebase
        .firestore()
        .collection(`${nickname}`)
        .doc("collection")
        .update({
          list: userlists.map((item) =>
            +item.id === +value.id ? { ...item, name: value.name } : item,
          ),
        })
        .then(() => {
          closeModal();
          setProps({ type: null, value: null, sucess: true });
        })
        .catch(() => {
          closeModal();
          showErrorModal("Something gone wrong. The list was not renamed");
          setProps({ type: null, value: null, sucess: false });
        });
    }
  }, [loading, props]);

  return [sucess, setProps];
}
