import React from "react";
import { orinalImageSize, posterSize } from "../../constants/constants";

import {
  Container,
  Wallpaper,
  Column,
  Poster,
  Title,
  Overview,
  Subtitle,
  Row,
  Fieldname,
  Fieldvalue,
  Credits,
  Link,
  Wrapper,
  Average,
  Count,
  Inner,
} from "./styles/details-poster";

export default function DetailsPoster({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

DetailsPoster.Inner = function DetailsPosterInner({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
};

DetailsPoster.Wallpaper = function PosterSecrionWallpaper({ src, ...rest }) {
  return <Wallpaper {...rest} src={`${orinalImageSize + src}`} />;
};

DetailsPoster.Column = function DetailsPosterColumn({ children, ...rest }) {
  return <Column {...rest}>{children}</Column>;
};

DetailsPoster.Poster = function DetailsPosterPoster({ src, ...rest }) {
  return <Poster src={`${posterSize + src}`} {...rest} />;
};

DetailsPoster.Title = function DetailsPosterTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

DetailsPoster.Overview = function DetailsPosterOverview({ children, ...rest }) {
  return <Overview {...rest}>{children}</Overview>;
};

DetailsPoster.Subtitle = function DetailsPosterSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

DetailsPoster.Row = function DetailsPosterRow({ children, ...rest }) {
  return <Row {...rest}>{children}</Row>;
};

DetailsPoster.Fieldname = function DetailsPosterFieldname({
  children,
  ...rest
}) {
  return <Fieldname {...rest}>{children}</Fieldname>;
};

DetailsPoster.Fieldvalue = function DetailsPosterFieldvalue({
  children,
  ...rest
}) {
  return <Fieldvalue {...rest}>{children}</Fieldvalue>;
};

DetailsPoster.Credits = function DetailsPosterCredits({ children, ...rest }) {
  return <Credits {...rest}>{children}</Credits>;
};

DetailsPoster.Link = function DetailsPosterLink({ children, ...rest }) {
  return <Link {...rest}>{children}</Link>;
};

DetailsPoster.Wrapper = function DetailsPosterWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

DetailsPoster.Average = function DetailsPosterAverage({ children, ...rest }) {
  return <Average {...rest}>{children}</Average>;
};

DetailsPoster.Count = function DetailsPosterCount({ children, ...rest }) {
  return <Count {...rest}>{children}</Count>;
};
