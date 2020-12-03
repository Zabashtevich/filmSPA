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

ListColumn.ItemContainer = function ListColumnItemContainer({ children }) {
  return (
    <ItemContainer>
      <ItemLink to={"/"} onMouseEnter={(e) => console.log(e)}>
        {children}
      </ItemLink>
    </ItemContainer>
  );
};
