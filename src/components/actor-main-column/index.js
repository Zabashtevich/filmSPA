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
} from "./styles/actor-main-column";

export default function ActorMainColumn({ children }) {
  return <Container>{children}</Container>;
}

ActorMainColumn.Name = function ActorMainColumnName({ children }) {
  return <Name>{children}</Name>;
};

ActorMainColumn.Title = function ActorMainColumnTitle({ children }) {
  return <Title>{children}</Title>;
};

ActorMainColumn.Overview = function ActorMainColumnOverview({ children }) {
  return <Overview>{children}</Overview>;
};

ActorMainColumn.CreditsWrapper = function ActorMainColumnCreditsWrapper({
  children,
}) {
  return <CreditsWrapper>{children}</CreditsWrapper>;
};

ActorMainColumn.CreditsRow = function ActorMainColumnCreditsRow({ children }) {
  return <Row>{children}</Row>;
};

ActorMainColumn.Date = function ActorMainColumnDate({ children }) {
  return <Date>{children}</Date>;
};

ActorMainColumn.ItemName = function ActorMainColumnItemName({ children }) {
  return <ItemName>{children}</ItemName>;
};
