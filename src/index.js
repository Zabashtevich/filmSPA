import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import "normalize.css";

import App from "./app/App";
import { GlobalStyles } from "./theme/global-style";
import theme from "./theme/theme";
import { rootReducer } from "./reducers";
import Wrapper from "./app/Wrapper";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Wrapper>
        <GlobalStyles />
        <App />
      </Wrapper>
    </Provider>
  </ThemeProvider>,

  document.getElementById("root"),
);
