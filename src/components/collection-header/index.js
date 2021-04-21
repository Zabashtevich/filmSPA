import React from "react";
import { orinalImageSize, w300miniature } from "../../constants/constants";

import {
  Inner,
  Wallpaper,
  Gradient,
  Container,
  Poster,
  Info,
  Title,
  Subrow,
  Subtitle,
  Overview,
  Row,
  Fieldname,
  Fieldvalue,
} from "./styles/collection-header";

export default function ColectionHeader({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
}

ColectionHeader.Wallpaper = function ColectionHeaderWallpaper({
  slug,
  ...rest
}) {
  return <Wallpaper {...rest} url={`${orinalImageSize + slug}`} />;
};

ColectionHeader.Gradient = function ColectionHeaderGradient({ ...rest }) {
  return <Gradient {...rest} />;
};

ColectionHeader.Container = function ColectionHeaderContainer({
  children,
  ...rest
}) {
  return <Container {...rest}>{children}</Container>;
};

ColectionHeader.Poster = function ColectionHeaderPoster({ slug, ...rest }) {
  return <Poster {...rest} src={`${w300miniature + slug}`} />;
};

ColectionHeader.Info = function ColectionHeaderInfo({ children, ...rest }) {
  return <Info {...rest}>{children}</Info>;
};

ColectionHeader.Title = function ColectionHeaderTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

ColectionHeader.Subrow = function ColectionHeaderSubrow({ children, ...rest }) {
  return <Subrow {...rest}>{children}</Subrow>;
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
