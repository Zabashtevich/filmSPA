import React from "react";

import {
  Container,
  Wrapper,
  Title,
  List,
  Item,
  Poster,
  Info,
  Subtitle,
  Date,
  Meta,
  Average,
  Count,
} from "./styles/popular";

export default function Popular({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Popular.Wrapper = function PopularWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Popular.Title = function PopularTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Popular.List = function PopularList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

Popular.Item = function PopularItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Popular.Poster = function PopularPoster({ children, ...rest }) {
  return <Poster {...rest}>{children}</Poster>;
};

Popular.Info = function PopularInfo({ children, ...rest }) {
  return <Info {...rest}>{children}</Info>;
};

Popular.Subtitle = function PopularSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

Popular.Date = function PopularDate({ children, ...rest }) {
  return <Date {...rest}>{children}</Date>;
};

Popular.Meta = function PopularMeta({ children, ...rest }) {
  return <Meta {...rest}>{children}</Meta>;
};

Popular.Average = function PopularAverage({ children, ...rest }) {
  return <Average {...rest}>{children}</Average>;
};

Popular.Count = function PopularCount({ children, ...rest }) {
  return <Count {...rest}>{children}</Count>;
};