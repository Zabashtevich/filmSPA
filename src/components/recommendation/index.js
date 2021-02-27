import React from "react";

import {
  Inner,
  Container,
  Item,
  Poster,
  Title,
  ImagePlaceholder,
  Placeholder,
} from "./styles/recommendation";

export default function Recommendation({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
}

Recommendation.Container = function RecommendationContainer({
  children,
  ...rest
}) {
  return <Container {...rest}>{children}</Container>;
};

Recommendation.Item = function RecommendationItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Recommendation.Poster = function RecommendationPoster({ ...rest }) {
  return <Poster {...rest} />;
};

Recommendation.Title = function RecommendationTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Recommendation.ImagePlaceholder = function RecommendationImagePlaceholder({
  ...rest
}) {
  return <ImagePlaceholder {...rest} />;
};

Recommendation.Placeholder = function RecommendationPlaceholder({
  children,
  ...rest
}) {
  return <Placeholder {...rest}>{children}</Placeholder>;
};
