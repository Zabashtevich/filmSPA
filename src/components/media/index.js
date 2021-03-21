import React from "react";
import { orinalImageSize, w200miniature } from "../../constants/constants";

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

Media.Backdrop = function MediaBackdrop({ file, ...rest }) {
  return <Backdrop {...rest} src={`${orinalImageSize + file}`} />;
};

Media.Poster = function MediaPoster({ file, ...rest }) {
  return <Poster {...rest} src={`${w200miniature + file}`} />;
};

Media.Video = function MediaVideo({ url, children, ...rest }) {
  return (
    <Video {...rest} url={`https://i.ytimg.com/vi/${url}/hqdefault.jpg`} />
  );
};

Media.Inner = function MediaInner({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
};

Media.Play = function MediaPlay({ ...rest }) {
  return <Play {...rest} />;
};
