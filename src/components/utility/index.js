import React from "react";
import { CSSTransition } from "react-transition-group";

import {
  Container,
  Message,
  Loading,
  Wrapper,
  Error,
  Icon,
} from "./styles/utility";

export default function Utility({ visible, children, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      appear={true}
      mountOnEnter
      unmountOnExit
      classNames="slide"
      timeout={500}
    >
      <Container {...rest}>{children}</Container>
    </CSSTransition>
  );
}

Utility.Icon = function UtilityIcon({ ...rest }) {
  return <Icon {...rest} />;
};

Utility.Message = function UtilityMessage({ children, ...rest }) {
  return <Message {...rest}>{children}</Message>;
};

Utility.Loading = function UtilityLoading({ ...rest }) {
  return <Loading {...rest} src={"/assets/spinner-medium.svg"} />;
};

Utility.Wrapper = function UtilityWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Utility.Error = function UtilityError({ children, ...rest }) {
  return <Error {...rest}>{children}</Error>;
};
