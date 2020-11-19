import React from "react";
import HeaderMainContainer from "./containers/headerMainContainer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <HeaderMainContainer />
    </Router>
  );
}

export default App;
