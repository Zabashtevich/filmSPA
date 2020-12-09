import React from "react";

import {
  Container,
  Title,
  ContentWrapper,
  Row,
  DarkTitle,
  LightTitle,
  TitleWrapperDark,
  TitleWrapperLight,
} from "./styles/card-description-column";

export default function CardDescriptionColumn({ children }) {
  return <Container>{children}</Container>;
}

CardDescriptionColumn.Title = function CardDescriptionColumnTitle({
  children,
}) {
  return <Title>{children}</Title>;
};

CardDescriptionColumn.ContentWrapper = function CardDescriptionColumnContentWrapper({
  children,
}) {
  return <ContentWrapper>{children}</ContentWrapper>;
};

CardDescriptionColumn.Row = function CardDescriptionColumnRow({ children }) {
  return <Row>{children}</Row>;
};

CardDescriptionColumn.DarkTitle = function CardDescriptionColumnDarkTitle({
  children,
}) {
  return (
    <TitleWrapperDark>
      <DarkTitle>{children}</DarkTitle>
    </TitleWrapperDark>
  );
};

CardDescriptionColumn.LightTitle = function CardDescriptionColumnLightTitle({
  children,
}) {
  return (
    <TitleWrapperLight>
      <LightTitle>{children}</LightTitle>
    </TitleWrapperLight>
  );
};
