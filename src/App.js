import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import MainPage from "./pages/main-page";

function App() {
  return (
    <Router>
      <MainPage />
    </Router>
  );
}

export default App;
