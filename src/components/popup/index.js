import React from "react";

import { orinalImageSize } from "./../../constants/constants";
import { Backdrop, Close, Image, Video } from "./styles/popup";

export default function Popup({ children, ...rest }) {
  return <Backdrop {...rest}>{children}</Backdrop>;
}

Popup.Close = function PopupClose({ ...rest }) {
  return <Close {...rest} />;
};

Popup.Image = function PopupImage({ slug, ...rest }) {
  return <Image {...rest} src={`${orinalImageSize + slug}`} />;
};

Popup.Video = function PopupVideo({ ...rest }) {
  return <Video {...rest} />;
};
