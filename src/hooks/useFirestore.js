import { useContext, useState, useEffect } from "react";

import { AuthContext } from "../context/auth-context";

export default function useFirestore(collectionTarget, docTarget, setData) {
  const [gettingData, setGettingData] = useState(false);
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(AuthContext);

  useEffect(() => {
    if (!loading) return;
    firebase
      .firestore()
      .collection(`${collectionTarget}`)
      .doc(`${docTarget}`)
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data().list;
          setData(data);
          setLoading(false);
        }
      });
    return () => {
      setGettingData(true);
    };
  }, []);

  return [loading];
}
