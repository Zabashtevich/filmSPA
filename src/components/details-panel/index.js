import React from "react";

import {
  Container,
  Title,
  Section,
  Star,
  Meta,
  Average,
  Count,
  Rating,
  Value,
  Delete,
  Subtitle,
  Wrapper,
  Date,
} from "./styles/details-panel";

export default function DetailsPanel({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

DetailsPanel.Title = function DetailsPanelTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

DetailsPanel.Section = function DetailsPanelSection({ children, ...rest }) {
  return <Section {...rest}>{children}</Section>;
};

DetailsPanel.Star = function DetailsPanelStar({ ...rest }) {
  return <Star {...rest} />;
};

DetailsPanel.Meta = function DetailsPanelMeta({ children, ...rest }) {
  return <Meta {...rest}>{children}</Meta>;
};

DetailsPanel.Average = function DetailsPanelAverage({ children, ...rest }) {
  return <Average {...rest}>{children}</Average>;
};

DetailsPanel.Count = function DetailsPanelCount({ children, ...rest }) {
  return <Count {...rest}>{children}</Count>;
};

DetailsPanel.Rating = function DetailsPanelRating({ children, ...rest }) {
  return <Rating {...rest}>{children}</Rating>;
};

DetailsPanel.Value = function DetailsPanelValue({ children, ...rest }) {
  return <Value {...rest}>{children}</Value>;
};

DetailsPanel.Subtitle = function DetailsPanelSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

DetailsPanel.Delete = function DetailsPanelDelete({ children, ...rest }) {
  return <Delete {...rest}>{children}</Delete>;
};

DetailsPanel.Date = function DetailsPanelDate({ children, ...rest }) {
  return <Date {...rest}>{children}</Date>;
};

DetailsPanel.Wrapper = function DetailsPanelWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};
