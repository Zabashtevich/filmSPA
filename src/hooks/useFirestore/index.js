import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { firebase } from "../../libs/firebase";

export default function useFirestore() {
  const { profile, profileLoading } = useSelector((state) => state.userProfile);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (profileLoading || !profile?.displayName) return;
    const unsubscribe = firebase
      .firestore()
      .collection(`${profile.displayName}`)
      .onSnapshot((snapshot) => {
        setData(snapshot.docs.map((doc) => doc.data()));
      });

    return () => unsubscribe();
  }, [profileLoading, profile]);

  return [data];
}
