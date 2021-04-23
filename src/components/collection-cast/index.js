import React from "react";
import { w200miniature } from "../../constants/constants";

import {
  Inner,
  Container,
  Title,
  List,
  Card,
  Poster,
  Info,
  Name,
  Role,
} from "./styles/collection-cast";

export default function CollectionCast({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
}

CollectionCast.Container = function CollectionCastContainer({
  children,
  ...rest
}) {
  return <Container {...rest}>{children}</Container>;
};

CollectionCast.Title = function CollectionCastTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

CollectionCast.List = function CollectionCastList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

CollectionCast.Card = function CollectionCastCard({ children, ...rest }) {
  return <Card {...rest}>{children}</Card>;
};

CollectionCast.Poster = function CollectionCastPoster({
  slug,
  children,
  ...rest
}) {
  return (
    <Poster
      src={
        slug
          ? `${w200miniature + slug}`
          : "https://dummyimage.com/60x60/aaa/aaa"
      }
      {...rest}
    >
      {children}
    </Poster>
  );
};

CollectionCast.Info = function CollectionCastInfo({ children, ...rest }) {
  return <Info {...rest}>{children}</Info>;
};

CollectionCast.Name = function CollectionCastName({ children, ...rest }) {
  return <Name {...rest}>{children}</Name>;
};

CollectionCast.Role = function CollectionCastRole({ children, ...rest }) {
  return <Role {...rest}>{children}</Role>;
};
