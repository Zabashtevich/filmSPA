import React from "react";
import { w300miniature } from "../../constants/constants";

import {
  Section,
  Header,
  Container,
  Item,
  Poster,
  Average,
  Wrapper,
  Title,
} from "./styles/trending";

export default function Trending({ children, ...rest }) {
  return <Section {...rest}>{children}</Section>;
}

Trending.Header = function TrendingHeader({ children, ...rest }) {
  return <Header {...rest}>{children}</Header>;
};

Trending.Container = function TrendingContainer({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
};

Trending.Item = function TrendingItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Trending.Poster = function TrendingPoster({ slug, ...rest }) {
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

Trending.Average = function TrendingAverage({ children, ...rest }) {
  return <Average {...rest}>{children}</Average>;
};

Trending.Wrapper = function TrendingWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Trending.Title = function TrendingTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};
