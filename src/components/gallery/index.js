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
  const [galleryVisible, setGalleryVisible] = useContext(GalleryContext);
  console.log(galleryVisible);
  return <Close {...rest} onClick={() => setGalleryVisible} />;
};

Gallery.Active = function GalleryActive({ link, imgRef, ...rest }) {
  const [loading, setLoading] = useState(true);

  return (
    <Active
      ref={imgRef}
      src={`https://image.tmdb.org/t/p/original${link}`}
      {...rest}
    />
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
