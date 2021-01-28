import React from "react";

import {
  Container,
  Name,
  Title,
  Overview,
  CreditsWrapper,
  Row,
  Date,
  ItemName,
  Number,
  Character,
  DescriptionWrapper,
} from "./styles/actor-main-column";

export default function ActorMainColumn({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

ActorMainColumn.Name = function ActorMainColumnName({ children, ...rest }) {
  return <Name {...rest}>{children}</Name>;
};

ActorMainColumn.Title = function ActorMainColumnTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

ActorMainColumn.Overview = function ActorMainColumnOverview({
  children,
  ...rest
}) {
  return <Overview {...rest}>{children}</Overview>;
};
