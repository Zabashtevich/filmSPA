import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/auth-context";

export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("loggedUser")),
  );
  const { firebase } = useContext(AuthContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        if (user === null) {
          localStorage.setItem("loggedUser", JSON.stringify(authUser));
          setUser(authUser);
        } else {
          localStorage.removeItem("loggedUser");
          localStorage.setItem("loggedUser", JSON.stringify(authUser));
          setUser(authUser);
        }
      } else {
        localStorage.removeItem("loggedUser");
        setUser(null);
      }
    });

    return () => {
      listener();
    };
  }, []);

  return { user };
}
