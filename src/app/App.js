import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ScrollTop from "./../helpers/scroll-top";
import ProtectedRoute from "../helpers/private-routes";
import useFirestore from "./../hooks/useFirestore";
import useAuthListener from "./../hooks/useAuthListener";
import {
  profileNotExist,
  setUserProfile,
  setUserData,
} from "../reducers/user-data/actions";
import { transformArrayToObject } from "../utils";

import {
  DetailsPage,
  MainPage,
  AuthPage,
  AccountPage,
  ActorPage,
  UserlistPage,
  GalleryPage,
  TrendingPage,
  CollectionPage,
  NomatchPage,
} from "../pages";

function App() {
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
  }, [data, loading, userLoading, user, dispatch]);

  return (
    <Router>
      {" "}
      <ScrollTop>
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>

          <Route path="/details/:direction/:slug" exact>
            <DetailsPage />
          </Route>

          <Route path="/authentication/:slug" exact>
            <AuthPage />
          </Route>

          <Route path="/details/:direction/:slug/gallery" exact>
            <GalleryPage />
          </Route>

          <Route path="/trending/:slug" exact>
            <TrendingPage />
          </Route>

          <Route path="/collection/:slug" exact>
            <CollectionPage />
          </Route>
          <Route path="/actor/:slug" exact>
            <ActorPage />
          </Route>

          <ProtectedRoute path="/account" exact>
            <AccountPage />
          </ProtectedRoute>

          <ProtectedRoute path="/account/userlists" exact>
            <UserlistPage />
          </ProtectedRoute>

          <Route path="*">
            <NomatchPage />
          </Route>
        </Switch>
      </ScrollTop>
    </Router>
  );
}

export default App;
