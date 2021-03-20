import React from "react";

import { Container, Message, Loading, Wrapper, Error } from "./styles/utility";

export default function Utility({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

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
