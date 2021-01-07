import { useContext, useState, useEffect } from "react";

import { AuthContext } from "../context/auth-context";

export default function useFirestore(collectionTarget, docTarget) {
  const [data, setData] = useState(null);
  const [gettingData, setGettingData] = useState(false);
  const [loading, setLoading] = useState(true);

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
          setData(doc.data().list);
          setLoading(false);
        } else {
          setData([]);
          setLoading(false);
        }
      });
    return () => {
      setGettingData(true);
      setLoading(false);
    };
  }, []);

  return [data, loading];
}
