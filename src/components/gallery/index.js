import React from "react";
import { CSSTransition } from "react-transition-group";
import { orinalImageSize, w200miniature } from "../../constants/constants";

import {
  Thumbnail,
  Placeholder,
  Backdrop,
  Close,
  Container,
  Active,
  Wrapper,
  Button,
  Left,
  Right,
  Miniature,
  Inner,
} from "./styles/gallery";

export default function Gallery({ visible, children, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      classNames="fade"
      appear={true}
      mountOnEnter
      unmountOnExit
      timeout={500}
    >
      <Thumbnail {...rest}>{children}</Thumbnail>
    </CSSTransition>
  );
}

Gallery.Placeholder = function GalleryPlaceholder({ ...rest }) {
  return <Placeholder {...rest} />;
};

Gallery.Backdrop = function GalleryBackdrop({ visible, children, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      classNames="fade"
      appear={true}
      mountOnEnter
      unmountOnExit
      timeout={500}
    >
      <Backdrop {...rest}>{children}</Backdrop>
    </CSSTransition>
  );
};

Gallery.Close = function GalleryClose({ ...rest }) {
  return <Close {...rest} />;
};

Gallery.Container = function GalleryContainer({ children, ...rest }) {
  return (
    <Container {...rest} onClick={(e) => e.stopPropagation()}>
      {children}
    </Container>
  );
};

Gallery.Active = function GalleryActive({ src, ...rest }) {
  return <Active {...rest} src={`${orinalImageSize + src}`} />;
};

Gallery.Wrapper = function GalleryWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Gallery.Button = function GalleryButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};

Gallery.Left = function GalleryLeft({ ...rest }) {
  return <Left {...rest} />;
};

Gallery.Right = function GalleryRight({ ...rest }) {
  return <Right {...rest} />;
};

Gallery.Inner = function GalleryInner({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
};

Gallery.Miniature = function GalleryMiniature({ src, ...rest }) {
  return <Miniature {...rest} src={`${w200miniature + src}`} />;
};
