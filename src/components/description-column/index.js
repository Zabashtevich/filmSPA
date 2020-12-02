import React from "react";

import {
  Container,
  Title,
  ContentWrapper,
  Row,
  DarkTitle,
  LightTitle,
} from "./styles/description-column";

export default function DescriptionColumn({ children }) {
  return <Container>{children}</Container>;
}

DescriptionColumn.Title = function DescriptionColumnTitle({ children }) {
  return <Title>{children}</Title>;
};

DescriptionColumn.ContentWrapper = function DescriptionColumnContentWrapper({
  children,
}) {
  return <ContentWrapper>{children}</ContentWrapper>;
};

DescriptionColumn.Row = function DescriptionColumnRow({ children }) {
  return <Row>{children}</Row>;
};

DescriptionColumn.DarkTitle = function DescriptionColumnDarkTitle({
  children,
}) {
  return <DarkTitle>{children}</DarkTitle>;
};

DescriptionColumn.LightTitle = function DescriptionColumnLightTitle({
  children,
}) {
  return <LightTitle>{children}</LightTitle>;
};
