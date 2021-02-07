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

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <AuthContextProvider>
      <FilterContextProvider>
        <Provider store={store}>
          <GlobalStyles />
          <App />
        </Provider>
      </FilterContextProvider>
    </AuthContextProvider>
  </ThemeProvider>,
  document.getElementById("root"),
);
