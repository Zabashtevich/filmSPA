import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/details/:direction/:slug" component={DetailsPage} exact />
        <Route path="/authentication/:slug" component={AuthPage} />
        <Route path="/account" component={AccountPage} exact />
        <ProtectedRoute path="/account/userlists" exact>
          <UserlistPage />
        </ProtectedRoute>
        <Route
          path="/details/:direction/:slug/gallery"
          component={GalleryPage}
          exact
        />
        <Route path="/trending/:slug" exact component={TrendingPage} />
        <Route path="/collection/:slug" exact component={CollectionPage} />
      </Switch>
    </Router>
  );
}

export default App;
