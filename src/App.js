import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  CardDetailsPage,
  MainPage,
  ActorDetailsPage,
  AuthenticationPage,
  ReviewPage,
  AccountPage,
  AccountEditPage,
} from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        {/* <ProtectedRoute user={user} path="/details/:slug"></ProtectedRoute> */}
        <Route path="/" component={MainPage} exact />
        <Route
          path="/details/:direction/:slug"
          component={CardDetailsPage}
          exact
        />
        <Route path="/actor/:slug" component={ActorDetailsPage} />
        <Route path="/authentication/:slug" component={AuthenticationPage} />
        <Route
          path="/details/:direction/:slug/review"
          component={ReviewPage}
          exact
        />
        <Route path="/account/:slug" component={AccountPage} exact />
        <Route path="/account/:slug/edit" component={AccountEditPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
