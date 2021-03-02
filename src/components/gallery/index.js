import React, { createContext, useContext, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { createPortal } from "react-dom";

import {
  Face,
  Icon,
  Backdrop,
  Container,
  Close,
  Active,
  Button,
  Inner,
  Arrow,
  Loading,
  Footer,
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

Gallery.Active = function GalleryActive({ link, ...rest }) {
  return (
    <Active src={`https://image.tmdb.org/t/p/original${link}`} {...rest} />
  );
};

Gallery.Footer = function GalleryFooter({ children, ...rest }) {
  return <Footer {...rest}>{children}</Footer>;
};

Gallery.Button = function GalleryButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};

Gallery.Arrow = function GalleryArrow({ ...rest }) {
  return <Arrow {...rest} />;
};

Gallery.Inner = function GalleryInner({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
};

Gallery.Miniature = function GalleryMiniature({ link, ...rest }) {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading && <Loading />}
      <Miniature
        src={`https://image.tmdb.org/t/p/w200${link}`}
        onLoad={() => setLoading(false)}
        {...rest}
      />
    </>
  );
};
