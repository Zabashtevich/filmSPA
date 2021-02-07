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
import { firebase } from "./libs/firebase";
import { AuthContext } from "./context/auth-context";
import { rootReducer } from "./reducers";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <Provider store={store}>
      <AuthContext.Provider value={{ firebase }}>
        <GlobalStyles />
        <App />
      </AuthContext.Provider>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root"),
);
