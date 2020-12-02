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
  return (
    <TitleWrapperDark>
      <DarkTitle>{children}</DarkTitle>
    </TitleWrapperDark>
  );
};

DescriptionColumn.LightTitle = function DescriptionColumnLightTitle({
  children,
}) {
  return (
    <TitleWrapperLight>
      <LightTitle>{children}</LightTitle>
    </TitleWrapperLight>
  );
};
