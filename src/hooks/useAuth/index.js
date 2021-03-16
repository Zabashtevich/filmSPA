import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useModalContext } from "../../context";
import { firebaseRequest } from "../../utils";

import { firebase } from "./../../libs/firebase";

export default function useAuth() {
  const [{ value, type }, setAuthProps] = useState({ value: null, type: null });
  const [{ error, loading }, setState] = useState({
    loading: false,
    error: null,
  });

  const [, { showModal }] = useModalContext();

  const history = useHistory();

  useEffect(() => {
    if (type === "login") {
      setState((prev) => ({ ...prev, loading: true }));
      firebase
        .auth()
        .signInWithEmailAndPassword(value.email, value.password)
        .then(() => history.push("/"))
        .catch(() => {
          setState({ loading: false, error: "user not found" });
        });
    } else if (type === "signup") {
      setState((prev) => ({ ...prev, loading: true }));
      firebase
        .auth()
        .createUserWithEmailAndPassword(value.email, value.password)
        .then((result) => {
          result.user.updateProfile({
            displayName: value.nickname,
            photoURL: value.url,
          });
        })
        .catch(() => {
          setState((prev) => ({ ...prev, loading: false }));
          showModal({ type: "error", message: "Something went wrong." });
        })
        .then(() => {
          firebaseRequest(value.nickname, "moviesrated")
            .set({ list: [] })
            .catch(() => {
              setState((prev) => ({ ...prev, loading: false }));
              showModal({ type: "error", message: "Something went wrong." });
            });
          firebaseRequest(value.nickname, "collection")
            .set({ list: [], favorite: [] })
            .catch(() => {
              setState((prev) => ({ ...prev, loading: false }));
              showModal({ type: "error", message: "Something went wrong." });
            });
          firebaseRequest(value.nickname, "reviews")
            .set({ list: [] })
            .catch(() => {
              setState((prev) => ({ ...prev, loading: false }));
              showModal({ type: "error", message: "Something went wrong." });
            })
            .then(() => {
              history.push("/");
            })
            .catch(() => {
              setState((prev) => ({ ...prev, loading: false }));
              showModal({ type: "error", message: "Something went wrong." });
            });
        });
    }
  }, [type, value]);
  return [loading, setAuthProps];
}
