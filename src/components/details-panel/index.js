import React from "react";
import { orinalImageSize } from "../../constants/constants";

import {
  Container,
  Title,
  Section,
  Rating,
  Star,
  Meta,
  Average,
  Count,
  Uservote,
  Row,
  Subtitle,
  Inner,
  Value,
  Delete,
  Date,
  Link,
  Poster,
  Description,
  Collectionname,
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

DetailsPanel.Inner = function DetailsPanelInner({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
};

DetailsPanel.Poster = function DetailsPanelPoster({ src, children, ...rest }) {
  return (
    <Poster {...rest} src={`${orinalImageSize + src}`}>
      {children}
    </Poster>
  );
};

DetailsPanel.Description = function DetailsPanelDescription({
  children,
  ...rest
}) {
  return <Description {...rest}>{children}</Description>;
};

DetailsPanel.Collectionname = function DetailsPanelCollectionname({
  children,
  ...rest
}) {
  return <Collectionname {...rest}>{children}</Collectionname>;
};

DetailsPanel.Link = function DetailsPanelLink({ children, ...rest }) {
  return <Link {...rest}>{children}</Link>;
};

DetailsPanel.Rating = function DetailsPanelRating({ children, ...rest }) {
  return <Rating {...rest}>{children}</Rating>;
};

DetailsPanel.Rating = function DetailsPanelRating({ children, ...rest }) {
  return <Rating {...rest}>{children}</Rating>;
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

DetailsPanel.Uservote = function DetailsPanelUservote({ children, ...rest }) {
  return <Uservote {...rest}>{children}</Uservote>;
};

DetailsPanel.Row = function DetailsPanelRow({ children, ...rest }) {
  return <Row {...rest}>{children}</Row>;
};

DetailsPanel.Subtitle = function DetailsPanelSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

DetailsPanel.Value = function DetailsPanelValue({ children, ...rest }) {
  return <Value {...rest}>{children}</Value>;
};

DetailsPanel.Delete = function DetailsPanelDelete({ children, ...rest }) {
  return <Delete {...rest}>{children}</Delete>;
};

DetailsPanel.Date = function DetailsPanelDate({ children, ...rest }) {
  return <Date {...rest}>{children}</Date>;
};
