import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useModalContext } from "../../context";

import { firebase } from "../../libs/firebase";

export default function useAuth(type) {
  const [loading, setLoading] = useState(false);
  const [] = useModalContext();
  const history = useHistory();

  function login({ email, password }) {
    setLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => history.push("/"))
      .catch(() => {
        setLoading(false);
      });
  }
}
