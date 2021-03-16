import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { firebaseRequest } from "../../utils";

import { firebase } from "./../../libs/firebase";

export default function useAuth() {
  const [{ value, type }, setAuthProps] = useState({ value: null, type: null });
  const [{ process, error }, setData] = useState({
    process: false,
    error: null,
  });

  const history = useHistory();

  useEffect(() => {
    if (type === "login") {
      setData((prev) => ({ ...prev, process: true }));
      firebase
        .auth()
        .signInWithEmailAndPassword(value.email, value.password)
        .then(() => history.push("/"))
        .catch(() => {
          setData({ process: false, error: "user not found" });
        });
    } else if (type === "signup") {
      setData((prev) => ({ ...prev, process: true }));
      firebase
        .auth()
        .createUserWithEmailAndPassword(value.email, value.password)
        .then((result) => {
          result.user.updateProfile({
            displayName: value.nickname,
            photoURL: value.url,
          });
        })
        .catch(() => setData({ process: false, error: "something gone wrong" }))
        .then(() => {
          firebaseRequest(value.nickname, "moviesrated")
            .set({ list: [] })
            .catch(() => {
              setData({ process: false, error: "something gone wrong" });
            });
          firebaseRequest(value.nickname, "collection")
            .set({ list: [], favorite: [] })
            .catch(() => {
              setData({ process: false, error: "something gone wrong" });
            });
          firebaseRequest(value.nickname, "reviews")
            .set({ list: [] })
            .catch(() => {
              setData({ process: false, error: "something gone wrong" });
            })
            .then(() => {
              history.push("/");
            })
            .catch(() =>
              setData({ process: false, error: "something gone wrong" }),
            );
        });
    }
  }, [type, value]);
  return [process, error, setAuthProps];
}
