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
} from "../reducers/user-data/actions";

export default function AccountPage() {
  const dispatch = useDispatch();

  const [user] = useAuthListener();

  const [moviesratedLoading, moviesrated] = useFirestore(
    user && `${user.displayName}`,
    `moviesrated`,
  );
  const [userlistsLoading, userlists] = useFirestore(
    user && `${user.displayName}`,
    `collection`,
  );
  const [favoritedLoading, favorited] = useFirestore(
    user && `${user.displayName}`,
    "collection",
    "favorite",
  );

  useEffect(() => {
    if (moviesratedLoading || userlistsLoading || favoritedLoading) return;
    dispatch(setRatedMovies(moviesrated));
    dispatch(setUserLists(userlists));
    dispatch(setFavoritedMovies(favorited));
  }, [
    moviesrated,
    userlists,
    favorited,
    dispatch,
    favoritedLoading,
    moviesratedLoading,
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
