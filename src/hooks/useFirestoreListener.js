import { useContext, useState, useEffect } from "react";

import { AuthContext } from "../context/auth-context";

export default function useFirestoreListener(collectionTarget, docTarget) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(AuthContext);
  useEffect(() => {
    let mounted = true;
    if (!mounted) return;
    firebase
      .firestore()
      .collection(`${collectionTarget}`)
      .doc(`${docTarget}`)
      .onSnapshot((doc) => {
        if (doc.exists) {
          const answer = doc.data().list;
          setData(answer);
          setLoading(false);
        } else {
          setLoading(false);
        }
      });
    return () => {
      mounted = false;
      setData([]);
    };
  }, [docTarget, collectionTarget]);

  return [loading, data];