import React from "react";

import {
  Container,
  Wrapper,
  Title,
  List,
  Item,
  Poster,
  Description,
  Name,
  Info,
  Overview,
  Subtitle,
  Average,
  Count,
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
  return <List {...rest}>{children}</List>;
};

Trending.Item = function TrendingItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Trending.Poster = function TrendingPoster({ children, ...rest }) {
  return <Poster {...rest} />;
};

Trending.Info = function TrendingInfo({ children, ...rest }) {
  return <Info {...rest}>{children}</Info>;
};

Trending.Name = function TrendingName({ children, ...rest }) {
  return <Name {...rest}>{children}</Name>;
};

Trending.Description = function TrendingDescription({ children, ...rest }) {
  return <Description {...rest}>{children}</Description>;
};

Trending.Overview = function TrendingOverview({ children, ...rest }) {
  return <Overview {...rest}>{children}</Overview>;
};

Trending.Subtitle = function TrendingSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

Trending.Average = function TrendingAverage({ children, ...rest }) {
  return <Average {...rest}>{children}</Average>;
};

Trending.Count = function TrendingCount({ children, ...rest }) {
  return <Count {...rest}>{children}</Count>;
};
