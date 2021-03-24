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
import CreditsContextProvider from "./context/credits-context/context";
import ModalContextProvider from "./context/modal-context/context";
import NoticeContextProvider from "./context/notice-context/context";
import PopupContextProvider from "./context/popup-context/context";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <UserDataLogic>
        <ModalContextProvider>
          <NoticeContextProvider>
            <CreditsContextProvider>
              <PopupContextProvider>
                <GlobalStyles />
                <App />
              </PopupContextProvider>
            </CreditsContextProvider>
          </NoticeContextProvider>
        </ModalContextProvider>
      </UserDataLogic>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root"),
);
