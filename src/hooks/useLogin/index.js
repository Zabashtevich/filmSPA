import { useState } from "react";
import { useHistory } from "react-router";
import { useModalContext } from "../../context";

import { firebase } from "../../libs/firebase";

export default function useLogin() {
  const [loading, setLoading] = useState(false);
  const [, { showErrorModal }] = useModalContext();
  const history = useHistory();

  function login({ email, password }) {
    setLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setLoading(false);
        history.push("/");
      })
      .catch(() => {
        setLoading(false);
        showErrorModal("User not found");
      });
  }

  return [loading, login];
}
