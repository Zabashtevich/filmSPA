import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import "normalize.css";

import App from "./App";
import { GlobalStyles } from "./theme/global-style";
import Theme from "./theme/theme";

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>,
  document.getElementById("root"),
);
