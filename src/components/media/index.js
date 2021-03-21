import React from "react";

import {
  Container,
  Header,
  Title,
  Wrapper,
  Tab,
  All,
  Scroller,
  Backdrop,
  Poster,
  Video,
  Thumbnail,
  Inner,
  Play,
} from "./styles/media";

export default function Media({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Media.Header = function MediaHeader({ children, ...rest }) {
  return <Header {...rest}>{children}</Header>;
};

Media.Title = function MediaTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Media.Wrapper = function MediaWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Media.Tab = function MediaTab({ children, ...rest }) {
  return <Tab {...rest}>{children}</Tab>;
};

Media.All = function MediaAll({ children, ...rest }) {
  return <All {...rest}>{children}</All>;
};

Media.Scroller = function MediaScroller({ children, ...rest }) {
  return <Scroller {...rest}>{children}</Scroller>;
};

Media.Backdrop = function MediaBackdrop({ ...rest }) {
  return <Backdrop {...rest} />;
};

Media.Poster = function MediaPoster({ ...rest }) {
  return <Poster {...rest} />;
};

Media.Video = function MediaVideo({ children, ...rest }) {
  return <Video {...rest}>{children}</Video>;
};

Media.Thumbnail = function MediaThumbnail({ ...rest }) {
  return <Thumbnail {...rest} />;
};

Media.Inner = function MediaInner({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
};

Media.Play = function MediaPlay({ ...rest }) {
  return <Play {...rest} />;
};
