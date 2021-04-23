import React from "react";
import { w200miniature } from "../../constants/constants";

import {
  Inner,
  Container,
  Title,
  List,
  Card,
  Poster,
  Wrapper,
  Subtitle,
  Date,
  Overview,
} from "./styles/collection-parts";

export default function CollectionParts({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
}

CollectionParts.Container = function CollectionPartsContainer({
  children,
  ...rest
}) {
  return <Container {...rest}>{children}</Container>;
};

CollectionParts.Title = function CollectionPartsTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

CollectionParts.List = function CollectionPartsList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

CollectionParts.Card = function CollectionPartsCard({ children, ...rest }) {
  return <Card {...rest}>{children}</Card>;
};

CollectionParts.Poster = function CollectionPartsPoster({
  slug,
  children,
  ...rest
}) {
  return <Poster {...rest} src={`${w200miniature + slug}`} />;
};

CollectionParts.Wrapper = function CollectionPartsWrapper({
  children,
  ...rest
}) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

CollectionParts.Subtitle = function CollectionPartsSubtitle({
  children,
  ...rest
}) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

CollectionParts.Date = function CollectionPartsDate({ children, ...rest }) {
  return <Date {...rest}>{children}</Date>;
};

CollectionParts.Overview = function CollectionPartsOverview({
  children,
  ...rest
}) {
  return <Overview {...rest}>{children}</Overview>;
};
