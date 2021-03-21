import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { firebase } from "./../../libs/firebase";

const initialState = {
  type: null,
  id: null,
  item: null,
};

export default function useUserlist() {
  const { loading, userlists } = useSelector((store) => store.userData);
  const { profile } = useSelector((state) => state.userProfile);

  const [props, setProps] = useState(initialState);

  const { item, type, id } = props;

  useEffect(() => {
    if (!loading && type === "create") {
      firebase
        .firestore()
        .collection(`${profile.displayName}`)
        .doc("collection")
        .update({ list: userlists.concat(item) })
        .then(() => {
          setProps(initialState);
        })
        .catch(() => {
          setProps(initialState);
        });
    } else if (!loading && type === "delete") {
      firebase
        .firestore()
        .collection(`${profile.displayName}`)
        .doc("collection")
        .update({ list: userlists.filter((item) => +item.id !== +id) })
        .then(() => {
          setProps(initialState);
        })
        .catch(() => {
          setProps(initialState);
        });
    } else if (!loading && type === "rename") {
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
          setProps(initialState);
        })
        .catch(() => {
          setProps(initialState);
        });
    } else if (!loading && type === "add to list") {
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
          setProps(initialState);
        })
        .catch(() => {
          setProps(initialState);
        });
    } else if (!loading && type === "delete from list") {
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
          setProps(initialState);
        })
        .catch(() => {
          setProps(initialState);
        });
    }
  }, [loading, props]);

  return [setProps];
}
