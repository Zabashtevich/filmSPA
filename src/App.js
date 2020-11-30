import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import CardDetails from "./pages/card-details";
import MainPage from "./pages/main-page";

function App() {
  return (
    <Router>
      <Route path="/" component={MainPage} exact></Route>
      <Route path="/details/:slug" component={CardDetails}></Route>
    </Router>
  );
}

export default App;
