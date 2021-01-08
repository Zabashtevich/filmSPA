import { useContext, useState, useEffect } from "react";

import { AuthContext } from "../context/auth-context";

export default function useFirestore(collectionTarget, docTarget) {
  const [gettingData, setGettingData] = useState(false);
  const [data, setData] = useState([]);
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
          const answer = doc.data().list;
          setData(answer);
          setLoading(false);
        } else {
          setLoading(false);
        }
      });
    return () => {
      setGettingData(true);
    };
  }, []);

  return [loading, data];
}
