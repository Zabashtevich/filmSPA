import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import "normalize.css";

import App from "./App";
import { GlobalStyles } from "./theme/global-style";
import Theme from "./theme/theme";
import { firebase } from "./libs/firebase";
import { AuthContext } from "./context/auth-context";

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <AuthContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </AuthContext.Provider>
  </ThemeProvider>,
  document.getElementById("root"),
);
