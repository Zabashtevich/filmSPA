import React from "react";
import { CSSTransition } from "react-transition-group";

import {
  Face,
  Icon,
  Backdrop,
  Container,
  Close,
  Active,
  Wrapper,
  Button,
  Arrow,
  Miniature,
} from "./styles/gallery";

export default function Gallery({ children, ...rest }) {
  return <Face {...rest}>{children}</Face>;
}

Gallery.Icon = function GalleryIcon({ ...rest }) {
  return <Icon {...rest} />;
};

Gallery.Backdrop = function GalleryBackdrop({ visible, children, ...rest }) {
  return (
    <CSSTransition
      classNames="fade"
      in={visible}
      timeout={500}
      appear={true}
      mountOnEnter
      unmountOnExit
    >
      <Backdrop {...rest}>{children}</Backdrop>
    </CSSTransition>
  );
};

Gallery.Container = function GalleryContainer({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
};

Gallery.Close = function GalleryClose({ ...rest }) {
  return <Close {...rest} />;
};

Gallery.Active = function GalleryActive({ ...rest }) {
  return <Active {...rest} />;
};

Gallery.Wrapper = function GalleryWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Gallery.Button = function GalleryButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};

Gallery.Arrow = function GalleryArrow({ ...rest }) {
  return <Arrow {...rest} />;
};

Gallery.Miniature = function GalleryMiniature({ ...rest }) {
  return <Miniature {...rest} />;
};
