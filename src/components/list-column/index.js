import React from "react";

import {
  Container,
  Title,
  ItemContainer,
  ItemLink,
} from "./styles/list-column";

export default function ListColumn({ children }) {
  return <Container>{children}</Container>;
}

ListColumn.Title = function ListColumnTitle({ children }) {
  return <Title>{children}</Title>;
};

ListColumn.ItemContainer = function ListColumnItemContainer({
  children,
  ...rest
}) {
  return (
    <ItemContainer>
      <ItemLink {...rest}>{children}</ItemLink>
    </ItemContainer>
  );
};
