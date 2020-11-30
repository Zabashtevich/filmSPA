import React from "react";

import {
  Container,
  Inner,
  HeaderContainer,
  ImgContainer,
  HeaderImg,
  DescriptionContainer,
  HeaderTitle,
  HeaderSubtitle,
  HeaderDirector,
  HeaderReview,
} from "./styles/card-details";

export default function CardDetails({ children }) {
  return <Container>{children}</Container>;
}

CardDetails.Header = function CardDetailsHeader({ children }) {
  return (
    <Inner>
      <HeaderContainer>{children}</HeaderContainer>
    </Inner>
  );
};

CardDetails.HeaderImg = function CardDetailsHeaderImg() {
  return (
    <ImgContainer>
      <HeaderImg />
    </ImgContainer>
  );
};

CardDetails.HeaderDescription = function CardDetailsHeaderDescription({
  children,
}) {
  return <DescriptionContainer>{children}</DescriptionContainer>;
};

CardDetails.HeaderTitle = function CardDetailHeaderTitle({ children }) {
  return <HeaderTitle>{children}</HeaderTitle>;
};

CardDetails.HeaderTagsContainer = function CardDetailHeaderTagsContainer({
  children,
}) {
  return <TagsContainer>{children}</TagsContainer>;
};

CardDetails.HeaderSubtitle = function CardDetailHeaderSubtitle({ children }) {
  return <HeaderSubtitle>{children}</HeaderSubtitle>;
};

CardDetails.HeaderDirector = function CardDetailHeaderDirector({ children }) {
  return <HeaderDirector>{children}</HeaderDirector>;
};

CardDetails.HeaderReview = function CardDetailHeaderReview({ children }) {
  return <HeaderReview>{children}</HeaderReview>;
};

CardDetails.Content = function CardDetailsContent({ children }) {
  return <Container>{children}</Container>;
};
