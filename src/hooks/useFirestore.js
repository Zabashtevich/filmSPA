import { useContext, useState, useEffect } from "react";

import { AuthContext } from "../context/auth-context";

export default function useFirestore({ collectionTarget, docTarget }) {
  const [data, setData] = useState(null);
  const [gettingData, setGettingData] = useState(false);

  const { firebase } = useContext(AuthContext);

  useEffect(() => {
    if (gettingData) return;
    firebase
      .firestore()
      .collection(`${collectionTarget}`)
      .doc(`${docTarget}`)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log(doc);
          setData(doc);
        } else {
          setData([]);
        }
      });
    return () => {
      setGettingData(true);
    };
  }, []);

  return { data };
}
