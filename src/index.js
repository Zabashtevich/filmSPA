import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import "normalize.css";

import App from "./App";
import { GlobalStyles } from "./theme/global-style";
import Theme from "./theme/theme";
import { rootReducer } from "./reducers";
import AuthContextProvider from "./context/auth-context/context";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <AuthContextProvider>
      <Provider store={store}>
        <GlobalStyles />
        <App />
      </Provider>
    </AuthContextProvider>
  </ThemeProvider>,
  document.getElementById("root"),
);
