import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import "normalize.css";

import App from "./App";
import { GlobalStyles } from "./theme/global-style";
import theme from "./theme/theme";
import { rootReducer } from "./reducers";
import UserDataLogic from "./helpers/user-data-logic";
import CreditsContextProvider from "./context/credits-context/context";
import ModalContextProvider from "./context/modal-context/context";
import NoticeContextProvider from "./context/notice-context/context";
import PopupContextProvider from "./context/popup-context/context";
import PaginContextProvider from "./context/pagin-context/context";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <UserDataLogic>
        <ModalContextProvider>
          <NoticeContextProvider>
            <CreditsContextProvider>
              <PopupContextProvider>
                <PaginContextProvider>
                  <GlobalStyles />
                  <App />
                </PaginContextProvider>
              </PopupContextProvider>
            </CreditsContextProvider>
          </NoticeContextProvider>
        </ModalContextProvider>
      </UserDataLogic>
    </Provider>
  </ThemeProvider>,

  document.getElementById("root"),
);
