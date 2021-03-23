import React from "react";
import { w200miniature } from "../../constants/constants";

import {
  Container,
  Header,
  Wrapper,
  Folder,
  Information,
  Title,
  Back,
  Icon,
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

Gallery.Wrapper = function GalleryWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Gallery.Folder = function GalleryFolder({ slug, ...rest }) {
  return <Folder {...rest} src={`${w200miniature + slug}`} />;
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

Gallery.Icon = function GalleryIcon({ ...rest }) {
  return <Icon {...rest} />;
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
