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

ActorMainColumn.CreditsWrapper = function ActorMainColumnCreditsWrapper({
  children,
  ...rest
}) {
  return <CreditsWrapper {...rest}>{children}</CreditsWrapper>;
};

ActorMainColumn.CreditsRow = function ActorMainColumnCreditsRow({
  children,
  ...rest
}) {
  return <Row {...rest}>{children}</Row>;
};

ActorMainColumn.Date = function ActorMainColumnDate({ children, ...rest }) {
  return <Date {...rest}>{children}</Date>;
};

ActorMainColumn.ItemName = function ActorMainColumnItemName({
  children,
  ...rest
}) {
  return <ItemName {...rest}>{children}</ItemName>;
};

ActorMainColumn.Number = function ActorMainColumnNumber({ children, ...rest }) {
  return <Number {...rest}>{children}</Number>;
};

ActorMainColumn.Character = function ActorMainColumnCharacter({
  children,
  ...rest
}) {
  return <Character {...rest}>{children}</Character>;
};

ActorMainColumn.DescriptionWrapper = function ActorMainColumnDescriptionWrapper({
  children,
  ...rest
}) {
  return <DescriptionWrapper {...rest}>{children}</DescriptionWrapper>;
};
