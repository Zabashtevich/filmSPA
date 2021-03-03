import React from "react";

import {
  Container,
  Wallpaper,
  Gradient,
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
} from "./styles/details-poster";

export default function DetailsPoster({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

DetailsPoster.Wallpaper = function PosterSecrionWallpaper({ ...rest }) {
  return <Wallpaper {...rest} />;
};

DetailsPoster.Gradient = function PosterSecrionGradient({ ...rest }) {
  return <Gradient {...rest} />;
};

DetailsPoster.Column = function DetailsPosterColumn({ children, ...rest }) {
  return <Column {...rest}>{children}</Column>;
};

DetailsPoster.Poster = function DetailsPosterPoster({ ...rest }) {
  return <Poster {...rest} />;
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
