import React from "react";

export default function ActorDescriptionColumn({ children }) {
  return <Container>{children}</Container>;
}

ActorDescriptionColumn.Name = function ActorDescriptionColumnName({
  children,
}) {
  return <Name>{children}</Name>;
};

ActorDescriptionColumn.Title = function ActorDescriptionColumnTitle({
  children,
}) {
  return <Title>{children}</Title>;
};

ActorDescriptionColumn.Overview = function ActorDescriptionColumnOverview({
  children,
}) {
  return <Overview>{children}</Overview>;
};
