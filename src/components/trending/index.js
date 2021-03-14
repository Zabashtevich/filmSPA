import React from "react";
import { TransitionGroup } from "react-transition-group";

import { w200miniature } from "./../../constants/constants";
import {
  Container,
  Wrapper,
  Title,
  List,
  Item,
  Poster,
  Date,
  Name,
  Info,
  Rating,
} from "./styles/trending";

export default function Trending({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Trending.Wrapper = function TrendingWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Trending.Title = function TrendingTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Trending.List = function TrendingList({ children, ...rest }) {
  return (
    <TransitionGroup {...rest} component={List}>
      {children}
    </TransitionGroup>
  );
};

Trending.Item = function TrendingItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Trending.Poster = function TrendingPoster({ src, children, ...rest }) {
  return <Poster {...rest} src={`${w200miniature + src}`} />;
};

Trending.Info = function TrendingInfo({ children, ...rest }) {
  return <Info {...rest}>{children}</Info>;
};

Trending.Name = function TrendingName({ children, ...rest }) {
  return <Name {...rest}>{children}</Name>;
};

Trending.Date = function TrendingDate({ children, ...rest }) {
  return <Date {...rest}>{children}</Date>;
};

Trending.Rating = function TrendingRating({ children, ...rest }) {
  return <Rating {...rest}>{children}</Rating>;
};
