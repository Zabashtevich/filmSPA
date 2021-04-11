import React from "react";
import processSpinner from "../../assets/process-spinner.svg";

import { Container, Message, Spinner } from "./styles/process";

export default function Process({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Process.Message = function ProcessMessage({ children, ...rest }) {
  return <Message {...rest}>{children}</Message>;
};

Process.Spinner = function ProcessSpinner({ ...rest }) {
  return <Spinner {...rest} src={processSpinner} />;
};
