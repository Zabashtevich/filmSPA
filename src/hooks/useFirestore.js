import { useContext, useState, useEffect } from "react";

import { AuthContext } from "../context/auth-context";

export default function useFirestore(collectionTarget, docTarget) {
  const [data, setData] = useState(null);
  const [gettingData, setGettingData] = useState(false);
  const [firestoreLoading, setFirestoreLoading] = useState(true);

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
          setData(doc.data());
          setFirestoreLoading(false);
        } else {
          setData([]);
          setFirestoreLoading(false);
        }
      });
    return () => {
      setGettingData(true);
      setFirestoreLoading(false);
    };
  }, []);

  return [data];
}
