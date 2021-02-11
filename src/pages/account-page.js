import React, { useEffect } from "react";

import useFirestore from "./../hooks/useFirestore";
import useAuthListener from "./../hooks/useAuthListener";
import {
  AccountRootContainer,
  HeaderContainer,
  AccountPanelContainer,
  FooterContainer,
} from "../containers";
import { useDispatch } from "react-redux";
import {
  setFavoritedMovies,
  setRatedMovies,
  setUserLists,
  setUserData,
} from "../reducers/user-data/actions";

export default function AccountPage() {
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

  return (
    <>
      <HeaderContainer />
      <AccountRootContainer />
      <AccountPanelContainer />
      <FooterContainer />
    </>
  );
}
