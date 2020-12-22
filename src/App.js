import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import CardDetailsPage from "./pages/card-details-page";
import MainPage from "./pages/main-page";
import ActorDetailsPage from "./pages/actor-details-page";
import AuthenticationPage from "./pages/authentication-page";
import useAuthListener from "./hooks/useAuthListener";

function App() {
  const { user } = useAuthListener();
  return (
    <Router>
      <Route path="/" component={MainPage} exact></Route>
      <Route path="/details/:slug" component={CardDetailsPage}></Route>
      <Route path="/actor/:slug" component={ActorDetailsPage}></Route>
      <Route
        path="/authentication/:slug"
        component={AuthenticationPage}
      ></Route>
    </Router>
  );
}

export default App;
