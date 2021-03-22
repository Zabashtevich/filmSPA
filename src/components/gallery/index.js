import React from "react";

import {
  Container,
  Header,
  Folder,
  Information,
  Title,
  Back,
  Column,
  Menu,
  Subtitle,
  Amount,
  Value,
  Backdrop,
  Poster,
} from "./styles/gallery";

export default function Gallery({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Gallery.Header = function GalleryHeader({ children, ...rest }) {
  return <Header {...rest}>{children}</Header>;
};

Gallery.Folder = function GalleryFolder({ ...rest }) {
  return <Folder {...rest} />;
};

Gallery.Information = function GalleryInformation({ children, ...rest }) {
  return <Information {...rest}>{children}</Information>;
};

Gallery.Title = function GalleryTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Gallery.Back = function GalleryBack({ children, ...rest }) {
  return <Back {...rest}>{children}</Back>;
};

Gallery.Column = function GalleryColumn({ children, ...rest }) {
  return <Column {...rest}>{children}</Column>;
};

Gallery.Menu = function GalleryMenu({ children, ...rest }) {
  return <Menu {...rest}>{children}</Menu>;
};

Gallery.Value = function GalleryValue({ children, ...rest }) {
  return <Value {...rest}>{children}</Value>;
};

Gallery.Subtitle = function GallerySubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

Gallery.Amount = function GalleryAmount({ children, ...rest }) {
  return <Amount {...rest}>{children}</Amount>;
};

Gallery.Backdrop = function GalleryBackdrop({ ...rest }) {
  return <Backdrop {...rest} />;
};

Gallery.Poster = function GalleryPoster({ ...rest }) {
  return <Poster {...rest} />;
};
