import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { firebase } from "../../libs/firebase";

export default function useFirestore() {
  const { profile, profileLoading } = useSelector((state) => state.userProfile);
  const [{ loading, data }, setData] = useState({ loading: true, data: null });

  useEffect(() => {
    if (profileLoading) return;
    if (!profile) return setData({ loading: false, data: null });
    const unsubscribe = firebase
      .firestore()
      .collection(`${profile.displayName}`)
      .onSnapshot((snapshot) => {
        setData({
          loading: false,
          data: snapshot.docs.map((doc) => doc.data()),
        });
      });

    return () => unsubscribe();
  }, [profileLoading, profile]);

  return [loading, data];
}
