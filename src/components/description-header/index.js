import React from "react";

import { Container, Title, SubTitle } from "./styles/description-header";

export default function DescritpionHeader({ children }) {
  return <Container>{children}</Container>;
}

DescritpionHeader.Title = function DescriptionHeaderTitle({ children }) {
  return <Title>{children}</Title>;
};

DescritpionHeader.SubTitle = function DescriptionHeaderSubTitle({ children }) {
  return <SubTitle>{children}</SubTitle>;
};
