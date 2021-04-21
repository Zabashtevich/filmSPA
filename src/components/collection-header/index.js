import React from "react";

import {
  Container,
  Wallpaper,
  Gradient,
  Section,
  Poster,
  Info,
  Title,
  Genres,
  Subtitle,
  Overview,
  Row,
  Fieldname,
  Fieldvalue,
} from "./styles/ColectionHeader";

export default function ColectionHeader({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

ColectionHeader.Wallpaper = function ColectionHeaderWallpaper({ ...rest }) {
  return <Wallpaper {...rest} />;
};

ColectionHeader.Gradient = function ColectionHeaderGradient({ ...rest }) {
  return <Gradient {...rest} />;
};

ColectionHeader.Section = function ColectionHeaderSection({
  children,
  ...rest
}) {
  return <Section {...rest}>{children}</Section>;
};

ColectionHeader.Poster = function ColectionHeaderPoster({ ...rest }) {
  return <Poster {...rest} />;
};

ColectionHeader.Info = function ColectionHeaderInfo({ children, ...rest }) {
  return <Info {...rest}>{children}</Info>;
};

ColectionHeader.Title = function ColectionHeaderTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

ColectionHeader.Genres = function ColectionHeaderGenres({ children, ...rest }) {
  return <Genres {...rest}>{children}</Genres>;
};

ColectionHeader.Subtitle = function ColectionHeaderSubtitle({
  children,
  ...rest
}) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

ColectionHeader.Overview = function ColectionHeaderOverview({
  children,
  ...rest
}) {
  return <Overview {...rest}>{children}</Overview>;
};

ColectionHeader.Row = function ColectionHeaderRow({ children, ...rest }) {
  return <Row {...rest}>{children}</Row>;
};

ColectionHeader.Fieldname = function ColectionHeaderFieldname({
  children,
  ...rest
}) {
  return <Fieldname {...rest}>{children}</Fieldname>;
};

ColectionHeader.Fieldvalue = function ColectionHeaderFieldvalue({
  children,
  ...rest
}) {
  return <Fieldvalue {...rest}>{children}</Fieldvalue>;
};
