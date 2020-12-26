import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CardDetailsPage from "./pages/card-details-page";
import MainPage from "./pages/main-page";
import ActorDetailsPage from "./pages/actor-details-page";
import AuthenticationPage from "./pages/authentication-page";
import useAuthListener from "./hooks/useAuthListener";
import HeaderMainContainer from "./containers/header-container";
import { ProtectedRoute } from "./helpers/private-routes";

function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <HeaderMainContainer user={user} />
      <Switch>
        {/* <ProtectedRoute user={user} path="/details/:slug"></ProtectedRoute> */}
        <Route path="/" component={MainPage} exact />
        <Route
          path="/details/:slug"
          component={() => <CardDetailsPage user={user} />}
        />
        <Route path="/actor/:slug" component={ActorDetailsPage} />
        <Route path="/authentication/:slug" component={AuthenticationPage} />
      </Switch>
    </Router>
  );
}

export default App;
