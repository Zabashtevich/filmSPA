import React from "react";
import { w200miniature } from "../../constants/constants";

import {
  Container,
  Header,
  Inner,
  Folder,
  Information,
  Title,
  Back,
  Icon,
  Wrapper,
  Column,
  Menu,
  Subtitle,
  Item,
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

Gallery.Inner = function GalleryInner({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
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

Gallery.Wrapper = function GalleryWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Gallery.Column = function GalleryColumn({ children, ...rest }) {
  return <Column {...rest}>{children}</Column>;
};

Gallery.Menu = function GalleryMenu({ children, ...rest }) {
  return <Menu {...rest}>{children}</Menu>;
};

Gallery.Subtitle = function GallerySubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

Gallery.Value = function GalleryValue({ children, ...rest }) {
  return <Value {...rest}>{children}</Value>;
};

Gallery.Item = function GalleryItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
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
