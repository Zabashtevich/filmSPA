import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { w200miniature, orinalImageSize } from "../../constants/constants";
import { useGalleryContext } from "../../context";

import { GalleryActiveSkeleton, GalleryMiniatureSkeleton } from "../skeleton";

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

Gallery.Active = function GalleryActive({ ...rest }) {
  const [{ url, process }, { setProcessing }] = useGalleryContext();
  return (
    <>
      <GalleryActiveSkeleton visible={process} />
      <Active
        src={`${orinalImageSize}${url}`}
        onLoad={setProcessing}
        {...rest}
      />
    </>
  );
};

Gallery.Footer = function GalleryFooter({ children, ...rest }) {
  return <Footer {...rest}>{children}</Footer>;
};

Gallery.Left = function GalleryLeft({ ...rest }) {
  return (
    <Button {...rest}>
      <Arrow />
    </Button>
  );
};

Gallery.Right = function GalleryRight({ ...rest }) {
  return (
    <Button {...rest}>
      <Arrow dir={"right"} />
    </Button>
  );
};

Gallery.Miniature = function GalleryMiniature({ path, url, ...rest }) {
  const [loading, setLoading] = useState(true);
  console.log(path);

  return (
    <>
      <GalleryMiniatureSkeleton visible={loading} />
      <Miniature
        src={`${w200miniature}${path}`}
        onLoad={() => setLoading(false)}
        selected={path === url && 1}
        {...rest}
      />
    </>
  );
};

Gallery.Inner = function GalleryInner({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
};
