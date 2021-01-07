import React from "react";
import { baseAuthorImageLink } from "../../constants/constants";

import {
  Nickname,
  Container,
  Content,
  Wrapper,
  ItemContainer,
  Date,
  Author,
  Avatar,
  Score,
  Title,
  ContentWrapper,
  NoReviews,
} from "./styles/reviews-list";

export default function ReviewsList({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

ReviewsList.Wrapper = function ReviewsListWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

ReviewsList.Author = function ReviewsListAuthor({ children, ...rest }) {
  return <Author {...rest}>{children}</Author>;
};

ReviewsList.Content = function ReviewsListContent({ children, ...rest }) {
  return (
    <ContentWrapper {...rest}>
      <Content>{children}</Content>
    </ContentWrapper>
  );
};

ReviewsList.ItemContainer = function ReviewsListContainer({
  children,
  ...rest
}) {
  return <ItemContainer {...rest}>{children}</ItemContainer>;
};

ReviewsList.Date = function ReviewsListDate({ children, ...rest }) {
  return <Date {...rest}>{children}</Date>;
};

ReviewsList.Nickname = function ReviewsListNickname({ children, ...rest }) {
  return <Nickname {...rest}>{children}</Nickname>;
};

ReviewsList.Avatar = function ReviewsListAvatar({ src, correctSrc, ...rest }) {
  return <Avatar src={src ? baseAuthorImageLink + src : correctSrc} />;
};

ReviewsList.Score = function ReviewsListScore({ children, ...rest }) {
  return <Score {...rest}>{children}</Score>;
};

ReviewsList.Title = function ReviewsListTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

ReviewsList.NoReviews = function ReviewsListNoReviews(...rest) {
  return <NoReviews {...rest}>{"No reviews"}</NoReviews>;
};
