import React from "react";

export default function PosterSection({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

PosterSection.Wallpaper = function PosterSecrionWallpaper({
  children,
  ...rest
}) {
  return <Wallpaper {...rest} />;
};

PosterSection.Column = function PosterSectionColumn({ children, ...rest }) {
  return <Column {...rest}>{children}</Column>;
};

PosterSection.Poster = function PosterSectionPoster({ ...rest }) {
  return <Poster {...rest} />;
};

PosterSection.Title = function PosterSectionTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};
