import React from "react";

import { baseAuthorImageLink, basePhotoLink } from "../../constants/constants";
import {
  Container,
  Icon,
  Wrapper,
  Photo,
  Close,
  ListContainer,
  ListItem,
  Backdrop,
  CloseWrapper,
  BottomWrapper,
  IconSlider,
  Button,
} from "./styles/modal-gallery";

export default function ModalGallery({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

ModalGallery.Icon = function ModalGalleryIcon({ ...rest }) {
  return (
    <Wrapper {...rest}>
      <Icon src={`../../assets/images/gallery-placeholder.png`} />
    </Wrapper>
  );
};

ModalGallery.Backdrop = function ModalGalleryBackdrop({ children, ...rest }) {
  return <Backdrop {...rest}>{children}</Backdrop>;
};

ModalGallery.Photo = function ModalGalleryPhoto({ children, src, ...rest }) {
  return (
    <Photo src={basePhotoLink + src} {...rest}>
      {children}
    </Photo>
  );
};

ModalGallery.CloseIcon = function ModalGalleryCloseIcon({ ...rest }) {
  return (
    <CloseWrapper>
      <Close {...rest} />
    </CloseWrapper>
  );
};

ModalGallery.ListContainer = function ModalGalleryListContainer({ children }) {
  return <ListContainer>{children}</ListContainer>;
};

ModalGallery.ListItem = function ModalGalleryListItem({ src, ...rest }) {
  return <ListItem src={baseAuthorImageLink + src} {...rest} />;
};

ModalGallery.BottomWrapper = function ModalGalleryBottomWrapper({
  children,
  ...rest
}) {
  return <BottomWrapper {...rest}>{children}</BottomWrapper>;
};

ModalGallery.Button = function ModalGalleryButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};

ModalGallery.IconSlider = function ModalGalleryIconSlider({
  children,
  ...rest
}) {
  return <IconSlider {...rest}>{children}</IconSlider>;
};
