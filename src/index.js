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
import FilterContextProvider from "./context/filter-context/context";
import ModalContextProvider from "./context/modal-context/context";
import MetalogicContextProvider from "./context/metalogic-context/context";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <AuthContextProvider>
        <FilterContextProvider>
          <ModalContextProvider>
            <MetalogicContextProvider>
              <GlobalStyles />
              <App />
            </MetalogicContextProvider>
          </ModalContextProvider>
        </FilterContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root"),
);
