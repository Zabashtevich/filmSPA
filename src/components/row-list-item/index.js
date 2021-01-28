import React from "react";

import { Container } from "./styles/row-list-item";

export default function RowListItem({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

RowListItem.CreditsRow = function RowListItemCreditsRow({ children, ...rest }) {
  return <Row {...rest}>{children}</Row>;
};

RowListItem.Date = function RowListItemDate({ children, ...rest }) {
  return <Date {...rest}>{children}</Date>;
};

RowListItem.ItemName = function RowListItemItemName({ children, ...rest }) {
  return <ItemName {...rest}>{children}</ItemName>;
};

RowListItem.Number = function RowListItemNumber({ children, ...rest }) {
  return <Number {...rest}>{children}</Number>;
};

RowListItem.Character = function RowListItemCharacter({ children, ...rest }) {
  return <Character {...rest}>{children}</Character>;
};

RowListItem.DescriptionWrapper = function RowListItemDescriptionWrapper({
  children,
  ...rest
}) {
  return <DescriptionWrapper {...rest}>{children}</DescriptionWrapper>;
};
