import React from "react";

import {
  Container,
  BackgroundImageWrapper,
  BackgroundImage,
  ColumnContainer,
  PosterWrapper,
  Poster,
  HeaderContainer,
  DescriptionContainer,
  MainTitle,
  SubTitle,
  DescriptionLightTitle,
  DescriptionDarkTitle,
  Row,
  VoteAverage,
  VoteAmount,
  CreditsList,
  CreditsListItem,
  ShortReview,
} from "./styles/card-details";

export default function CardDetails({ children }) {
  return <Container>{children}</Container>;
}

CardDetails.BackgroundImage = function CardDetailsBackgroundImage() {
  return (
    <BackgroundImageWrapper>
      <BackgroundImage />
    </BackgroundImageWrapper>
  );
};

CardDetails.Column = function CardDetailsColumn({ children }) {
  return <ColumnContainer>{children}</ColumnContainer>;
};

CardDetails.Poster = function CardDetailsPoster() {
  return (
    <PosterWrapper>
      <Poster />
    </PosterWrapper>
  );
};

CardDetails.DescriptionHeader = function CardDetailsDescriptionHeader({
  children,
}) {
  return <HeaderContainer>{children}</HeaderContainer>;
};

CardDetails.DescriptionContent = function CardDetailsDescriptionContent({
  children,
}) {
  return <DescriptionContainer>{children}</DescriptionContainer>;
};

CardDetails.MainTitle = function CardDetailsMainTitle({ children }) {
  return <MainTitle>{children}</MainTitle>;
};

CardDetails.SubTitle = function CardDetailsSubTitle({ children }) {
  return <SubTitle>{children}</SubTitle>;
};

CardDetails.DescriptionLightTitle = function CardDetailsDescriptionLightTitle({
  children,
}) {
  return <DescriptionLightTitle>{children}</DescriptionLightTitle>;
};

CardDetails.DescriptionDarkTitle = function CardDetailsDescriptionDarkTitle({
  children,
}) {
  return <DescriptionDarkTitle>{children}</DescriptionDarkTitle>;
};

CardDetails.Row = function CardDetailsRow({ children }) {
  return <Row>{children}</Row>;
};

CardDetails.VoteAverage = function CardDetailsVoteAverage({ children }) {
  return <VoteAverage>{children}</VoteAverage>;
};

CardDetails.VoteAmount = function CardDetailsVoteAmount({ children }) {
  return <VoteAmount>{children}</VoteAmount>;
};

CardDetails.CreditsList = function CardDetailsCreditsList({ children }) {
  return <CreditsList>{children}</CreditsList>;
};

CardDetails.CreditsListItem = function CardDetailsCreditsListItem({
  children,
}) {
  return <CreditsListItem>{children}</CreditsListItem>;
};

CardDetails.ShortReview = function CardDetailsShortReview({ children }) {
  return <ShortReview>{children}</ShortReview>;
};
