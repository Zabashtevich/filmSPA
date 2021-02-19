import { useState, useEffect } from "react";
import { firebase } from "./../../libs/firebase";

export default function useFirestore(
  collectionTarget,
  docTarget,
  auxTarget = "list",
) {
  const [data, setData] = useState({ loading: true, content: [] });

  useEffect(() => {
    let mounted = true;
    if (!mounted) return;
    const unsubscribe = firebase
      .firestore()
      .collection(`${collectionTarget}`)
      .doc(`${docTarget}`)
      .onSnapshot((doc) => {
        if (doc.exists) {
          const answer = doc.data()[`${auxTarget}`];
          setData({ loading: false, content: answer });
        } else {
          setData((prev) => ({ ...prev, loading: false }));
        }
      });
    return () => {
      mounted = false;
      unsubscribe();
    };
  }, [docTarget, collectionTarget]);

  const { loading, content } = data;
  return [loading, content];
}
