import React from "react";
import { TransitionGroup } from "react-transition-group";

import {
  Container,
  Title,
  Overview,
  CreditsWrapper,
  Name,
} from "./styles/actor-main-column";

export default function ActorMainColumn({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

ActorMainColumn.Title = function ActorMainColumnTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

ActorMainColumn.Overview = function ActorMainColumnOverview({
  children,
  ...rest
}) {
  return <Overview {...rest}>{children}</Overview>;
};

ActorMainColumn.CreditsWrapper = function ActorMainColumnCreditsWrapper({
  children,
  ...rest
}) {
  return (
    <TransitionGroup component={CreditsWrapper} {...rest}>
      {children}
    </TransitionGroup>
  );
};

ActorMainColumn.Name = function ActorMainColumnName({ children, ...rest }) {
  return <Name {...rest}>{children}</Name>;
};
