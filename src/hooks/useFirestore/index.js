import { useEffect, useState } from "react";
import { firebase } from "../../libs/firebase";

export default function useFirestore(nickname) {
  const [{ loading, data }, setData] = useState({ loading: true, data: null });

  useEffect(() => {
    if (!nickname) return setData({ loading: false, data: null });
    const unsubscribe = firebase
      .firestore()
      .collection(`${nickname}`)
      .onSnapshot((snapshot) => {
        setData({
          loading: false,
          data: snapshot.docs.map((doc) => doc.data()),
        });
      });

    return () => unsubscribe();
  }, [nickname]);

  return [loading, data];
}
