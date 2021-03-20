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
import UserDataLogic from "./helpers/user-data-logic";
import PaginationContextProvider from "./context/pagination-context/context";
import CreditsContextProvider from "./context/credits-context/context";
import ModalContextProvider from "./context/modal-context/context";
import UtilityContextProvider from "./context/utility-context/context";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <UserDataLogic>
        <PaginationContextProvider>
          <ModalContextProvider>
            <UtilityContextProvider>
              <CreditsContextProvider>
                <GlobalStyles />
                <App />
              </CreditsContextProvider>
            </UtilityContextProvider>
          </ModalContextProvider>
        </PaginationContextProvider>
      </UserDataLogic>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root"),
);
