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
import AccountMetalogicContextProvider from "./context/account-metalogic-context/context";
import UserDataLogic from "./helpers/user-data-logic";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <AuthContextProvider>
        <UserDataLogic>
          <FilterContextProvider>
            <AccountMetalogicContextProvider>
              <GlobalStyles />
              <App />
            </AccountMetalogicContextProvider>
          </FilterContextProvider>
        </UserDataLogic>
      </AuthContextProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root"),
);
