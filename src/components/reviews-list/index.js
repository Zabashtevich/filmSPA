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
  TextLink,
  HeaderWrapper,
  ReviewsAmount,
  AmountWrapper,
  AmountTitle,
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
  const [firstLine, ...rst] = children.split("\n");
  return (
    <ContentWrapper {...rest}>
      <Content>
        {firstLine}
        {rst.map((item, i) => {
          if (item.length > 1) {
            if (item.indexOf("https") > -1) {
              return (
                <TextLink
                  key={i}
                  style={{ margin: 0 }}
                  href={item}
                  target="_blank"
                >
                  {item}
                </TextLink>
              );
            } else {
              return (
                <p key={i} style={{ margin: 0 }}>
                  <br /> {item}
                </p>
              );
            }
          }
        })}
      </Content>
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

ReviewsList.HeaderWrapper = function ReviewsListHeaderWrapper({
  children,
  ...rest
}) {
  return <HeaderWrapper {...rest}>{children}</HeaderWrapper>;
};

ReviewsList.ReviewsAmount = function ReviewsListReviewsAmount({
  children,
  ...rest
}) {
  return <ReviewsAmount {...rest}>{children}</ReviewsAmount>;
};

ReviewsList.AmountWrapper = function ReviewsListAmountWrapper({
  children,
  ...rest
}) {
  return <AmountWrapper {...rest}>{children}</AmountWrapper>;
};

ReviewsList.AmountTitle = function ReviewsListAmountTitle({
  children,
  ...rest
}) {
  return <AmountTitle {...rest}>{children}</AmountTitle>;
};
