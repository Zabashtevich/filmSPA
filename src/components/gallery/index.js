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
  Wrapper,
  Button,
  Inner,
  ArrowLeft,
  ArrowRight,
  Footer,
  Miniature,
} from "./styles/gallery";

const GalleryContext = createContext(null);

export default function Gallery({ children, ...rest }) {
  const [galleryVisible, setGalleryVisible] = useState(true);

  return (
    <Face {...rest} onClick={() => setGalleryVisible((prev) => !prev)}>
      <GalleryContext.Provider value={[galleryVisible, setGalleryVisible]}>
        {children}
      </GalleryContext.Provider>
    </Face>
  );
}

Gallery.Icon = function GalleryIcon({ ...rest }) {
  return <Icon {...rest} />;
};

Gallery.Backdrop = function GalleryBackdrop({ children, ...rest }) {
  const [galleryVisible, setGalleryVisible] = useContext(GalleryContext);

  return (
    galleryVisible &&
    createPortal(
      <CSSTransition
        classNames="fade"
        in={galleryVisible}
        timeout={500}
        appear={true}
        mountOnEnter
        unmountOnExit
      >
        <Backdrop {...rest} onClick={() => setGalleryVisible(false)}>
          {children}
        </Backdrop>
      </CSSTransition>,
      document.getElementById("root"),
    )
  );
};

Gallery.Container = function GalleryContainer({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
};

Gallery.Close = function GalleryClose({ ...rest }) {
  const [, setGalleryVisible] = useContext(GalleryContext);

  return <Close {...rest} onClick={() => setGalleryVisible} />;
};

Gallery.Active = function GalleryActive({ ...rest }) {
  return <Active {...rest} />;
};

Gallery.Wrapper = function GalleryWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Gallery.Footer = function GalleryFooter({ children, ...rest }) {
  return <Footer {...rest}>{children}</Footer>;
};

Gallery.Button = function GalleryButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};

Gallery.ArrowLeft = function GalleryArrowLeft({ ...rest }) {
  return <ArrowLeft {...rest} />;
};

Gallery.ArrowRight = function GalleryArrowRight({ ...rest }) {
  return <ArrowRight {...rest} />;
};

Gallery.Inner = function GalleryInner({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
};

Gallery.Miniature = function GalleryMiniature({ ...rest }) {
  return <Miniature {...rest} />;
};
