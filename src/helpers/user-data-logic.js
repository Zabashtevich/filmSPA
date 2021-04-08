import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useFirestore from "./../hooks/useFirestore";
import useAuthListener from "./../hooks/useAuthListener";
import {
  setUserlists,
  setFavorites,
  setVotes,
  finishLoading,
} from "../reducers/user-data/actions";
import { setUserProfile } from "../reducers/user-profile/actions";

export default function UserDataLogic({ children }) {
  const dispatch = useDispatch();
  const [user, userLoading] = useAuthListener();

  const { firestoreListener } = useFirestore();

  useEffect(() => {
    if (!userLoading) {
      dispatch(setUserProfile(user));
    }
  }, [userLoading, dispatch, user]);

  useEffect(() => {
    if (!user) {
      return;
    }
    const unsubscribe = firestoreListener(user.displayName, "userlists")
      .onSnapshot((doc) => {
        dispatch(setUserlists(doc.data()));
      })
      .then(() => {
        return firestoreListener(user.displayName, "favorites").onSnapshot(
          (doc) => {
            dispatch(setFavorites(doc.data()));
          },
        );
      })
      .then(() => {
        return firestoreListener(user.displayName, "votes").onSnapshot(
          (doc) => {
            dispatch(setVotes(doc.data()));
          },
        );
      })
      .then(() => dispatch(finishLoading));

    return () => {
      unsubscribe();
    };
  }, [user]);

  return children;
}
