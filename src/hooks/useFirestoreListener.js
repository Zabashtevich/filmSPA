import { useState, useEffect } from "react";
import { useAuthContext } from "../context";


export default function useFirestoreListener(collectionTarget, docTarget) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const firebase = useAuthContext()
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