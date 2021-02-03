import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/auth-context";

export default function useAuthListener() {
  const [data, setData] = useState({
    data: JSON.parse(localStorage.getItem("loggedUser")),
    loading: true,
  });
  const { firebase } = useContext(AuthContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        if (data === null) {
          localStorage.setItem("loggedUser", JSON.stringify(authUser));
          setData({ user: authUser, loading: false });
        } else {
          localStorage.removeItem("loggedUser");
          localStorage.setItem("loggedUser", JSON.stringify(authUser));
          setData({ user: authUser, loading: false });
        }
      } else {
        localStorage.removeItem("loggedUser");
        setData({ data: null, loading: false });
      }
    });

    return () => {
      listener();
    };
  }, []);

  const { user, loading } = data;
  return [user, loading];
}
