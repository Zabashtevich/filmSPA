import React from "react";
import { w300miniature } from "../../constants/constants";

import {
  Section,
  Container,
  Item,
  Poster,
  Description,
  Row,
  Title,
  Average,
  Year,
  Count,
} from "./styles/popular";

export default function Popular({ children, ...rest }) {
  return <Section {...rest}>{children}</Section>;
}

Popular.Container = function PopularContainer({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
};

Popular.Item = function PopularItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Popular.Poster = function PopularPoster({ slug, children, ...rest }) {
  return (
    <Poster
      {...rest}
      src={
        slug
          ? `${w300miniature + slug}`
          : "https://dummyimage.com/250x375/aaa/aaa"
      }
    />
  );
};

Popular.Description = function PopularDescription({ children, ...rest }) {
  return <Description {...rest}>{children}</Description>;
};

Popular.Row = function PopularRow({ children, ...rest }) {
  return <Row {...rest}>{children}</Row>;
};

Popular.Title = function PopularTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Popular.Average = function PopularAverage({ children, ...rest }) {
  return <Average {...rest}>{children}</Average>;
};

Popular.Year = function PopularYear({ children, ...rest }) {
  return <Year {...rest}>{children}</Year>;
};

Popular.Count = function PopularCount({ children, ...rest }) {
  return <Count {...rest}>{children}</Count>;
};
