import React from "react";
import { w300miniature } from "../../constants/constants";

import {
  Section,
  Title,
  Column,
  Menu,
  Subtitle,
  Item,
  Container,
  Card,
  Poster,
  Wrapper,
  Name,
  Average,
} from "./styles/trending";

export default function Trending({ children, ...rest }) {
  return <Section {...rest}>{children}</Section>;
}

Trending.Title = function TrendingTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Trending.Column = function TrendingColumn({ children, ...rest }) {
  return <Column {...rest}>{children}</Column>;
};

Trending.Menu = function TrendingMenu({ children, ...rest }) {
  return <Menu {...rest}>{children}</Menu>;
};

Trending.Subtitle = function TrendingSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

Trending.Item = function TrendingItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Trending.Container = function TrendingContainer({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
};

Trending.Card = function TrendingCard({ children, ...rest }) {
  return <Card {...rest}>{children}</Card>;
};

Trending.Poster = function TrendingPoster({ slug, children, ...rest }) {
  return (
    <Poster
      {...rest}
      src={
        slug
          ? `${w300miniature + slug}`
          : "https://dummyimage.com/300x450/aaa/aaa"
      }
    />
  );
};

Trending.Wrapper = function TrendingWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Trending.Name = function TrendingName({ children, ...rest }) {
  return <Name {...rest}>{children}</Name>;
};

Trending.Average = function TrendingAverage({ children, ...rest }) {
  return <Average {...rest}>{children}</Average>;
};
