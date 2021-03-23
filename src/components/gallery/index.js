import React from "react";
import { CSSTransition } from "react-transition-group";
import { w200miniature, w300miniature } from "../../constants/constants";

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
  Video,
  Play,
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

Gallery.Item = function GalleryItem({ visible, onexited, children, ...rest }) {
  return (
    <CSSTransition
      classNames="fade"
      in={visible}
      timeout={500}
      mountOnEnter
      unmountOnExit
      appear={true}
      onExited={onexited}
    >
      <Item {...rest}>{children}</Item>
    </CSSTransition>
  );
};

Gallery.Amount = function GalleryAmount({ children, ...rest }) {
  return <Amount {...rest}>{children}</Amount>;
};

Gallery.Backdrop = function GalleryBackdrop({ slug, ...rest }) {
  return <Backdrop {...rest} src={`${w300miniature + slug}`} />;
};

Gallery.Poster = function GalleryPoster({ slug, ...rest }) {
  return <Poster {...rest} src={`${w200miniature + slug}`} />;
};

Gallery.Video = function GalleryVideo({ slug, children, ...rest }) {
  return (
    <Video {...rest} url={`https://i.ytimg.com/vi/${slug}/hqdefault.jpg`}>
      {children}
    </Video>
  );
};

Gallery.Play = function GalleryPlay({ slug, ...rest }) {
  return <Play {...rest} />;
};
