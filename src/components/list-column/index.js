import React from "react";

import {
  Container,
  Title,
  ItemContainer,
  MiniatureName,
  ItemLink,
} from "./styles/list-column";

export default function ListColumn({ children }) {
  return <Container>{children}</Container>;
}

ListColumn.Title = function ListColumnTitle({ children }) {
  return <Title>{children}</Title>;
};

ListColumn.ItemContainer = function ListColumnItemContainer({ children }) {
  return (
    <ItemContainer>
      <ItemLink to={"/"}>{children}</ItemLink>
    </ItemContainer>
  );
};

ListColumn.MiniatureName = function ListColumnMiniatureName({ children }) {
  return <MiniatureName>{children}</MiniatureName>;
};
