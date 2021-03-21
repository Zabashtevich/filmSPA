import React from "react";
import { CSSTransition } from "react-transition-group";
import { orinalImageSize } from "../../constants/constants";

import {
  Container,
  Section,
  Title,
  Collection,
  Info,
  Subtitle,
  Button,
  Subsection,
  Star,
  Rating,
  Value,
  Wrapper,
  Date,
  Delete,
  Meta,
  Average,
  Count,
} from "./styles/details-panel";

export default function DetailsPanel({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

DetailsPanel.Section = function DetailsPanelSection({
  visible,
  onexited,
  children,
  ...rest
}) {
  return (
    <CSSTransition
      in={visible}
      classNames="fade"
      mountOnEnter
      unmountOnExit
      appear={true}
      timeout={500}
      onExited={onexited}
    >
      <Section {...rest}>{children}</Section>
    </CSSTransition>
  );
};

DetailsPanel.Title = function DetailsPanelTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

DetailsPanel.Collection = function DetailsPanelCollection({
  src,
  children,
  ...rest
}) {
  return (
    <Collection {...rest} src={`${orinalImageSize + src}`}>
      {children}
    </Collection>
  );
};

DetailsPanel.Info = function DetailsPanelInfo({ children, ...rest }) {
  return <Info {...rest}>{children}</Info>;
};

DetailsPanel.Subtitle = function DetailsPanelSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

DetailsPanel.Button = function DetailsPanelButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};

DetailsPanel.Subsection = function DetailsPanelSubsection({
  children,
  ...rest
}) {
  return <Subsection {...rest}>{children}</Subsection>;
};

DetailsPanel.Star = function DetailsPanelStar({ ...rest }) {
  return <Star {...rest} />;
};

DetailsPanel.Rating = function DetailsPanelRating({ children, ...rest }) {
  return <Rating {...rest}>{children}</Rating>;
};

DetailsPanel.Value = function DetailsPanelValue({ children, ...rest }) {
  return <Value {...rest}>{children}</Value>;
};

DetailsPanel.Wrapper = function DetailsPanelWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

DetailsPanel.Date = function DetailsPanelDate({ children, ...rest }) {
  return <Date {...rest}>{children}</Date>;
};

DetailsPanel.Delete = function DetailsPanelDelete({ children, ...rest }) {
  return <Delete {...rest}>{children}</Delete>;
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
