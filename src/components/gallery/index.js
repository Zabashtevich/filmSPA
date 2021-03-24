import React from "react";
import { TransitionGroup } from "react-transition-group";
import { w200miniature, w300miniature } from "../../constants/constants";

import {
  Container,
  Header,
  Wrapper,
  Folder,
  Information,
  Title,
  Back,
  Icon,
  Body,
  Widget,
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

Gallery.Body = function GalleryBody({ children, ...rest }) {
  return <Body {...rest}>{children}</Body>;
};

Gallery.Widget = function GalleryWidget({ children, ...rest }) {
  return <Widget {...rest}>{children}</Widget>;
};

Gallery.Column = function GalleryColumn({ children, ...rest }) {
  return (
    <TransitionGroup component={Column} {...rest}>
      {children}
    </TransitionGroup>
  );
};

Gallery.Menu = function GalleryMenu({ children, ...rest }) {
  return (
    <TransitionGroup component={Menu} {...rest}>
      {children}
    </TransitionGroup>
  );
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
