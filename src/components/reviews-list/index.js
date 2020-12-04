import React from "react";

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
} from "./styles/reviews-list";

export default function ReviewsList({ children }) {
  return <Container>{children}</Container>;
}

ReviewsList.Wrapper = function ReviewsListWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
};

ReviewsList.Author = function ReviewsListAuthor({ children }) {
  return <Author>{children}</Author>;
};

ReviewsList.Content = function ReviewsListContent({ children }) {
  return <Content>{children}</Content>;
};

ReviewsList.ItemContainer = function ReviewsListContainer({ children }) {
  return <ItemContainer>{children}</ItemContainer>;
};

ReviewsList.Date = function ReviewsListDate({ children }) {
  return <Date>{children}</Date>;
};

ReviewsList.Nickname = function ReviewsListNickname({ children }) {
  return <Nickname>{children}</Nickname>;
};

ReviewsList.Avatar = function ReviewsListAvatar({ src }) {
  return <Avatar src={src} />;
};

ReviewsList.Score = function ReviewsListScore({ children }) {
  return <Score>{children}</Score>;
};

ReviewsList.Title = function ReviewsListTitle({ children }) {
  return <Title>{children}</Title>;
};
