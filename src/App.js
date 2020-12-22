import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CardDetailsPage from "./pages/card-details-page";
import MainPage from "./pages/main-page";
import ActorDetailsPage from "./pages/actor-details-page";
import AuthenticationPage from "./pages/authentication-page";
import useAuthListener from "./hooks/useAuthListener";
import { ProtectedRoute } from "./helpers/private-routes";

function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
        <ProtectedRoute user={user} path="/details/:slug"></ProtectedRoute>
        <Route path="/" component={MainPage} />
        <Route path="/details/:slug" component={CardDetailsPage} />
        <Route path="/actor/:slug" component={ActorDetailsPage} />
        <Route path="/authentication/:slug" component={AuthenticationPage} />
      </Switch>
    </Router>
  );
}

export default App;
