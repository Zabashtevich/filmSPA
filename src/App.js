import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  DetailsPage,
  MainPage,
  AuthPage,
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
        <Route path="/details/:direction/:slug" component={DetailsPage} exact />
        <Route path="/authentication/:slug" component={AuthPage} />
        <Route
          path="/details/:direction/:slug/review"
          component={ReviewPage}
          exact
        />
        <Route
          path={["/account/:slug", "/account/:slug/:filter"]}
          component={AccountPage}
          exact
        />
        <Route path="/account/:slug/edit" component={AccountEditPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
