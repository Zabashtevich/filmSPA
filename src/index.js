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
import FilterContextProvider from "./context/filter-context/context";
import UserDataLogic from "./helpers/user-data-logic";
import ModalContextProvider from "./context/modal-context/context";
import FirelogicContext from "./context/firelogic-context/context";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <UserDataLogic>
        <ModalContextProvider>
          <FirelogicContext>
            <FilterContextProvider>
              <GlobalStyles />
              <App />
            </FilterContextProvider>
          </FirelogicContext>
        </ModalContextProvider>
      </UserDataLogic>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root"),
);
