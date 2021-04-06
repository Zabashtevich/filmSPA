import { useState } from "react";
import { useHistory } from "react-router";

import { useModalContext } from "./../../context";
import { createUserDatafolder } from "../../utils";
import { firebase } from "./../../libs/firebase";

export default function useSignup() {
  const [, { showErrorModal }] = useModalContext();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function signup(data) {
    setLoading(true);
    if (data.file) loadUserAvatar(data);
    if (!data.file) createUserProfile(data, null);
  }

  function loadUserAvatar(data) {
    const ref = firebase.storage().ref();
    const fileRef = ref.child(data.file.name);
    fileRef.put(data.file);
    fileRef.getDownloadURL().then((url) => {
      createUserProfile(data, url);
    });
  }

  function createUserProfile({ password, email, name }, url) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: name,
            photoURL: url,
          })
          .then(() => {
            createUserDatafolder(name)
              .then(() => {
                setLoading(false);
                history.push("/");
              })
              .catch(() => {
                setLoading(false);
                showErrorModal("Something gone wrong");
              });
          });
      })
      .catch(() => {
        setLoading(false);
        showErrorModal("Something gone wrong");
      });
  }

  return [loading, signup];
}
