import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useFirestore from "./../hooks/useFirestore";
import useAuthListener from "./../hooks/useAuthListener";
import { setUserData } from "../reducers/user-data/actions";

export default function UserDataLogic({ children }) {
  const dispatch = useDispatch();
  const [user] = useAuthListener();

  const [ratedMoviesLoading, ratedMovies] = useFirestore(
    user && `${user.displayName}`,
    `moviesrated`,
  );
  const [userlistsLoading, userlists] = useFirestore(
    user && `${user.displayName}`,
    `collection`,
  );
  const [favoritedLoading, favoritedMovies] = useFirestore(
    user && `${user.displayName}`,
    "collection",
    "favorite",
  );

  useEffect(() => {
    if (ratedMoviesLoading || userlistsLoading || favoritedLoading) return;

    dispatch(setUserData({ userlists, favoritedMovies, ratedMovies }));
  }, [
    ratedMovies,
    userlists,
    favoritedMovies,
    dispatch,
    favoritedLoading,
    ratedMoviesLoading,
    userlistsLoading,
  ]);

  return children;
}
