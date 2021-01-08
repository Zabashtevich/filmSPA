import { useContext, useState, useEffect } from "react";

import { AuthContext } from "../context/auth-context";

export default function useFirestore(collectionTarget, docTarget) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(AuthContext);
  console.log(data, docTarget);
  useEffect(() => {
    let mounted = true;
    if (!mounted) return;
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
      mounted = false;
    };
  }, [docTarget, collectionTarget]);

  return [loading, data];
}
