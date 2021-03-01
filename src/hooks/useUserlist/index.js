import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { useModalContext, useProcessContext } from "./../../context";
import { firebase } from "./../../libs/firebase";

const initialState = {
  type: null,
  id: null,
  item: null,
};

export default function useUserlist() {
  const [, { showModal }] = useModalContext();
  const [, { showProcessWindow, closeProcessingWindow }] = useProcessContext();

  const { loading, userlists } = useSelector((store) => store.userData);
  const { profile } = useSelector((state) => state.userProfile);

  const [props, setProps] = useState(initialState);

  const { item, type, id } = props;

  useEffect(() => {
    if (!loading && type === "create") {
      showProcessWindow({
        type: "userlistProcess",
        message: "Creating your list",
      });
      firebase
        .firestore()
        .collection(`${profile.displayName}`)
        .doc("collection")
        .update({ list: userlists.concat(item) })
        .then(() => {
          closeProcessingWindow({ type: "userlistProcess" });
          setProps(initialState);
        })
        .catch(() => {
          closeProcessingWindow({ type: "userlistProcess" });
          showModal({
            type: "error",
            message: "Something gone wrong. The list was not created.",
          });
          setProps(initialState);
        });
    } else if (!loading && type === "delete") {
      showProcessWindow({
        type: "userlistProcess",
        message: "Deleting your list",
      });
      firebase
        .firestore()
        .collection(`${profile.displayName}`)
        .doc("collection")
        .update({ list: userlists.filter((item) => +item.id !== +id) })
        .then(() => {
          closeProcessingWindow({ type: "userlistProcess" });
          setProps(initialState);
        })
        .catch(() => {
          closeProcessingWindow({ type: "userlistProcess" });
          showModal({
            type: "error",
            message: "Something gone wrong. The list was not created.",
          });
          setProps(initialState);
        });
    } else if (!loading && type === "rename") {
      showProcessWindow({
        type: "userlistProcess",
        message: "Renaming your list",
      });
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
          closeProcessingWindow({ type: "userlistProcess" });
          setProps(initialState);
        })
        .catch(() => {
          closeProcessingWindow({ type: "userlistProcess" });
          showModal({
            type: "error",
            message: "Something gone wrong. The list was not renamed",
          });
          setProps(initialState);
        });
    } else if (!loading && type === "add to list") {
      showProcessWindow({
        type: "userlistProcess",
        message: "Adding to list",
      });
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
          closeProcessingWindow({ type: "userlistProcess" });
          setProps(initialState);
        })
        .catch(() => {
          closeProcessingWindow({ type: "userlistProcess" });
          showModal({
            type: "error",
            message: "Something gone wrong. Item was not added to list",
          });
          setProps(initialState);
        });
    } else if (!loading && type === "delete from list") {
      showProcessWindow({
        type: "userlistProcess",
        message: "Deleting item from list",
      });
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
          closeProcessingWindow({ type: "userlistProcess" });
          setProps(initialState);
        })
        .catch(() => {
          closeProcessingWindow({ type: "userlistProcess" });
          showModal({
            type: "error",
            message: "Something gone wrong. Item was not deleted from list",
          });
          setProps(initialState);
        });
    }
  }, [loading, props]);

  return [setProps];
}
