import { useState, useEffect } from "react";
import { useHistory } from "react-router";

import { firebase } from "../../libs/firebase";

export default function useAuth() {
  const [{ value, type }, setAuthProps] = useState({ value: null, type: null });
  const [{ error, loading }, setState] = useState({
    loading: false,
    error: null,
  });

  const history = useHistory();

  useEffect(() => {
    if (type === "login") {
      setState((prev) => ({ ...prev, loading: true }));
    } else if (type === "signup") {
      setState((prev) => ({ ...prev, loading: true }));
      if (value.file) {
        const ref = firebase.storage().ref();
        const fileRef = ref.child(value.file.name);
        fileRef.put(value.file);
        fileRef
          .getDownloadURL()
          .then(function (url) {
            firebase
              .auth()
              .createUserWithEmailAndPassword(value.email, value.password)
              .then((result) => {
                result.user.updateProfile({
                  displayName: value.nickname,
                  photoURL: url,
                });
              });
          })
          .then(() => createUserDataRows());
      } else {
        firebase
          .auth()
          .createUserWithEmailAndPassword(value.email, value.password)
          .then((result) => {
            result.user.updateProfile({
              displayName: value.nickname,
              photoURL: null,
            });
          })
          .catch(() => {
            setState((prev) => ({ ...prev, loading: false }));
          })
          .then(() => createUserDataRows());
      }
    }
  }, [type, value]);

  return [loading, error, setAuthProps];

  function createUserDataRows() {
    firebase
      .firestore()
      .collection(`${value.nickname}`)
      .doc(`moviesrated`)
      .set({ list: [] })
      .catch(() => {
        setState((prev) => ({ ...prev, loading: false }));
      });
    firebase
      .firestore()
      .collection(`${value.nickname}`)
      .doc(`collection`)
      .set({ list: [], favorite: [] })
      .catch(() => {
        setState((prev) => ({ ...prev, loading: false }));
      });
    firebase
      .firestore()
      .collection(`${value.nickname}`)
      .doc(`reviews`)
      .set({ list: [] })
      .catch(() => {
        setState((prev) => ({ ...prev, loading: false }));
      })
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setState((prev) => ({ ...prev, loading: false }));
      });
  }
}
