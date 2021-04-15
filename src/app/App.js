import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  DetailsPage,
  MainPage,
  AuthPage,
  AccountPage,
  ActorPage,
  UserlistPage,
  GalleryPage,
  TrendingPage,
} from "../pages";

function App() {
  return (
    <Router>
      <Switch>
        {/* <ProtectedRoute user={user} path="/details/:slug"></ProtectedRoute> */}
        <Route path="/" component={MainPage} exact />
        <Route path="/details/:direction/:slug" component={DetailsPage} exact />
        <Route path="/authentication/:slug" component={AuthPage} />
        <Route path="/account" component={AccountPage} exact />
        <Route path="/actor/:slug" exact component={ActorPage} />
        <Route path="/userlist" component={UserlistPage} exact />
        <Route
          path="/details/:direction/:slug/gallery"
          component={GalleryPage}
          exact
        />
        <Route path="/trending/:slug" exact component={TrendingPage} />
      </Switch>
    </Router>
  );
}

export default App;
