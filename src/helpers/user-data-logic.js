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

  const [data] = useFirestore();

  useEffect(() => {
    if (!userLoading) {
      dispatch(setUserProfile(user));
    }
  }, [userLoading, dispatch, user]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return children;
}
