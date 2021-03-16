import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  DetailsPage,
  MainPage,
  AuthPage,
  AccountPage,
  AccountEditPage,
  ActorPage,
} from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        {/* <ProtectedRoute user={user} path="/details/:slug"></ProtectedRoute> */}
        <Route path="/" component={MainPage} exact />
        <Route path="/details/:direction/:slug" component={DetailsPage} exact />
        <Route path="/authentication/:slug" component={AuthPage} />

        <Route path={"/account"} component={AccountPage} exact />
        <Route path="/actor/:slug" exact component={ActorPage} />
        <Route path="/account/:slug/edit" component={AccountEditPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
