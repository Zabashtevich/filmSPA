import React from "react";

import { Container, Title, SubTitle } from "./styles/description-header";

export default function DescriptionHeader({ children }) {
  return <Container>{children}</Container>;
}

DescriptionHeader.Title = function DescriptionHeaderTitle({ children }) {
  return <Title>{children}</Title>;
};

DescriptionHeader.SubTitle = function DescriptionHeaderSubTitle({ children }) {
  return <SubTitle>{children}</SubTitle>;
};
