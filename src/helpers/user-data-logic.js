import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useFirestore from "./../hooks/useFirestore";
import useAuthListener from "./../hooks/useAuthListener";
import {
  profileNotExist,
  setUserProfile,
  setUserData,
} from "../reducers/user-data/actions";
import { transformArrayToObject } from "../utils";

export default function UserDataLogic({ children }) {
  const { profile } = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  const [user, userLoading] = useAuthListener();
  const [loading, data] = useFirestore(profile?.displayName);

  useEffect(() => {
    if (!userLoading && user) {
      dispatch(setUserProfile(user));
    }
    if (!userLoading && !user) {
      dispatch(profileNotExist());
    }
    if (!loading && data) {
      dispatch(setUserData(transformArrayToObject(data)));
    }
  }, [data, loading, userLoading, user]);

  return children;
}
