import React from "react";

import { Nickname, Container, Content, Wrapper } from "./styles/reviews-list";

export default function ReviewsList({ children }) {
  return <Container>{children}</Container>;
}

ReviewsList.Wrapper = function ReviewsListWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
};

ReviewsList.Nickname = function ReviewsListNickname({ children }) {
  return <Nickname>{children}</Nickname>;
};

ReviewsList.Content = function ReviewsListContent({ children }) {
  return <Content>{children}</Content>;
};
