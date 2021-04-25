import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useFirestore from "./../hooks/useFirestore";
import useAuthListener from "./../hooks/useAuthListener";
import { setData, startLoading } from "../reducers/user-data/actions";
import { setUserProfile } from "../reducers/user-profile/actions";
import { transformArrayToObject } from "../utils";

export default function UserDataLogic({ children }) {
  const { profile } = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();

  const [user, userLoading] = useAuthListener();
  const [loading, data] = useFirestore(profile?.displayName);

  useEffect(() => {
    if (!userLoading) {
      dispatch(setUserProfile(user));
    }
  }, [userLoading, dispatch, user]);

  useEffect(() => {
    if (!loading && data) {
      dispatch(startLoading());
      dispatch(setData(transformArrayToObject(data)));
    }
    if (!loading && !data) {
      dispatch(setData(null));
    }
  }, [data, loading]);

  return children;
}
