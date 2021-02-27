import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { useModalContext } from "./../../context";
import { firebase } from "./../../libs/firebase";

const initialState = {
  type: null,
  id: null,
  item: null,
};

export default function useUserlist() {
  const [, modalinterface] = useModalContext();

  const userData = useSelector((store) => store.userData);
  const userProfile = useSelector((state) => state.userProfile);

  const [props, setProps] = useState(initialState);

  const { profile } = userProfile;
  const { item, type, id } = props;
  const { loading, userlists } = userData;
  const { showProcessingWindow, closeModal, showErrorModal } = modalinterface;

  useEffect(() => {
    if (!loading && type === "create") {
      showProcessingWindow("Creating your list");
      firebase
        .firestore()
        .collection(`${profile.displayName}`)
        .doc("collection")
        .update({ list: userlists.concat(item) })
        .then(() => {
          closeModal();
          setProps(initialState);
        })
        .catch(() => {
          closeModal();
          showErrorModal("Something gone wrong. The list was not created.");
          setProps(initialState);
        });
    } else if (!loading && type === "delete") {
      showProcessingWindow("Deleting your list");
      firebase
        .firestore()
        .collection(`${profile.displayName}`)
        .doc("collection")
        .update({ list: userlists.filter((item) => +item.id !== +id) })
        .then(() => {
          closeModal();
          setProps(initialState);
        })
        .catch(() => {
          closeModal();
          showErrorModal("Something gone wrong. The list was not created.");
          setProps(initialState);
        });
    } else if (!loading && type === "rename") {
      showProcessingWindow("Renaming your list");
      firebase
        .firestore()
        .collection(`${profile.displayName}`)
        .doc("collection")
        .update({
          list: userlists.map((list) =>
            +list.id === +item.id ? { ...list, name: item.name } : list,
          ),
        })
        .then(() => {
          closeModal();
          setProps(initialState);
        })
        .catch(() => {
          closeModal();
          showErrorModal("Something gone wrong. The list was not renamed");
          setProps(initialState);
        });
    } else if (!loading && type === "add to list") {
      showProcessingWindow("Adding to list");
      firebase
        .firestore()
        .collection(`${profile.displayName}`)
        .doc("collection")
        .update({
          list: userlists.map((list) =>
            +list.id === +id
              ? { ...list, content: list.content.concat(item) }
              : list,
          ),
        })
        .then(() => {
          closeModal();
          setProps(initialState);
        })
        .catch(() => {
          closeModal();
          showErrorModal("Something gone wrong. Item was not added to list");
          setProps(initialState);
        });
    } else if (!loading && type === "delete from list") {
      showProcessingWindow("Deleting item from list");
      firebase
        .firestore()
        .collection(`${profile.displayName}`)
        .doc("collection")
        .update({
          list: userlists.map((list) =>
            +list.id === +id
              ? {
                  ...list,
                  content: list.content.filter((i) => +i.id !== +item.id),
                }
              : list,
          ),
        })
        .then(() => {
          closeModal();
          setProps(initialState);
        })
        .catch(() => {
          closeModal();
          showErrorModal(
            "Something gone wrong. Item was not deleted from list",
          );
          setProps(initialState);
        });
    }
  }, [loading, props]);

  return [setProps];
}
