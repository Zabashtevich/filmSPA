import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import MainPage from "./pages/main-page";

function App() {
  return (
    <Router>
      <Route path="/" component={MainPage} exact></Route>
    </Router>
  );
}

export default App;
