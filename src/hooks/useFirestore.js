import { useContext, useState, useEffect } from "react";

import { AuthContext } from "../context/auth-context";

export default function useFirestore(collectionTarget, docTarget) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(AuthContext);
  useEffect(() => {
    let mounted = true;
    if (!mounted) return;
    const unsubscribe = firebase
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
      unsubscribe();
    };
  }, [docTarget, collectionTarget]);

  return [loading, data];
}
