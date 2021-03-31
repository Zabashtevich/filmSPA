import React from "react";
import { TransitionGroup } from "react-transition-group";

export default function Pagin({ children, ...rest }) {
  return (
    <TransitionGroup {...rest} component={Container}>
      {children}
    </TransitionGroup>
  );
}
