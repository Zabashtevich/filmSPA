import React from "react";

import {
  Container,
  Title,
  ItemContainer,
  Miniature,
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

ListColumn.Miniature = function ListColumnMiniature({ src }) {
  return <Miniature src={src} />;
};

ListColumn.MiniatureName = function ListColumnMiniatureName({ children }) {
  return <MiniatureName>{children}</MiniatureName>;
};
