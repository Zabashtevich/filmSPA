import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import DetailsPage from "./pages/detais-page";
import MainPage from "./pages/main-page";

function App() {
  return (
    <Router>
      <Route path="/" component={MainPage} exact></Route>
      <Route path="/details/:slug" component={DetailsPage}></Route>
    </Router>
  );
}

export default App;
