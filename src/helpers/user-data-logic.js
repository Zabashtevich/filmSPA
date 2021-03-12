import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useFirestore from "./../hooks/useFirestore";
import useAuthListener from "./../hooks/useAuthListener";
import { setUserData } from "../reducers/user-data/actions";
import { setReviews } from "../reducers/reviews-data/actions";
import { setUserProfile } from "../reducers/user-profile/actions";

export default function UserDataLogic({ children }) {
  const dispatch = useDispatch();
  const [user, userLoading] = useAuthListener();

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

  const [reviewsLoading, reviews] = useFirestore(
    user && `${user.displayName}`,
    "reviews",
  );

  useEffect(() => {
    if (!userLoading) {
      dispatch(setUserProfile(user));
    }
  }, [userLoading, dispatch, user]);

  useEffect(() => {
    if (reviewsLoading) return;
    dispatch(setReviews(reviews));
  }, [reviewsLoading, reviews, dispatch]);

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
