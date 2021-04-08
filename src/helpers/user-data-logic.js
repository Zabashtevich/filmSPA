import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useFirestore from "./../hooks/useFirestore";
import useAuthListener from "./../hooks/useAuthListener";
import { setUserData } from "../reducers/user-data/actions";

export default function UserDataLogic({ children }) {
  const dispatch = useDispatch();
  const [user, userLoading] = useAuthListener();

  const [userlistsLoading, userlists] = useFirestore(
    user && `${user.displayName}`,
    `userlists`,
  );
  const [favoritesLoading, favorites] = useFirestore(
    user && `${user.displayName}`,
    `favorites`,
  );
  const [votesLoading, votes] = useFirestore(
    user && `${user.displayName}`,
    "votes",
  );

  useEffect(() => {
    if (!userLoading) {
      dispatch(setUserProfile(user));
    }
  }, [userLoading, dispatch, user]);

  useEffect(() => {
    if (userlistsLoading || favoritesLoading || votesLoading) return;

    dispatch(setUserData({ votes, favorites, userlists }));
  }, [
    userlistsLoading,
    favoritesLoading,
    votesLoading,
    votes,
    favorites,
    userlists,
  ]);

  return children;
}
