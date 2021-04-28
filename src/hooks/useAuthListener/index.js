import { useState, useEffect } from "react";
import { firebase } from "./../../libs/firebase";

export default function useAuthListener() {
  const [data, setData] = useState({
    user: JSON.parse(localStorage.getItem("loggedUser")),
    loading: JSON.parse(localStorage.getItem("loggedUser")) ? false : true,
  });

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        if (data.user === null) {
          localStorage.setItem("loggedUser", JSON.stringify(authUser));
          setData({ user: authUser, loading: false });
        } else {
          localStorage.removeItem("loggedUser");
          localStorage.setItem("loggedUser", JSON.stringify(authUser));
          setData({ user: authUser, loading: false });
        }
      } else {
        localStorage.removeItem("loggedUser");
        setData({ user: null, loading: false });
      }
    });

    return () => {
      listener();
    };
  }, []);

  const { user, loading } = data;
  return [user, loading];
}
