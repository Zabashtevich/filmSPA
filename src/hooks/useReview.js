import { useContext, useState, useEffect } from "react";

import { AuthContext } from "../context/auth-context";

export default function useReview(id) {
  const { firebase } = useContext(AuthContext);
  const [data, setData] = useState(null);
  const [gettingData, setGettingData] = useState(false);

  useEffect(() => {
    if (gettingData) return;
    firebase
      .firestore()
      .collection(`reviews`)
      .where("id", "==", id)
      .get()
      .then((doc) => {
        console.log("doc");
      })
      .catch((error) => console.log("error"));
  }, []);
}
