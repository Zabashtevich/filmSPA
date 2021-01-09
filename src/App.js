import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CardDetailsPage from "./pages/card-details-page";
import MainPage from "./pages/main-page";
import ActorDetailsPage from "./pages/actor-details-page";
import AuthenticationPage from "./pages/authentication-page";
import ReviewPage from "./pages/review-page";

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
      </Switch>
    </Router>
  );
}

export default App;
