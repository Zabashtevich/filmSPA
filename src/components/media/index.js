import React from "react";
import { CSSTransition } from "react-transition-group";
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
  return (
    <CSSTransition
      in={true}
      appear={true}
      mountOnEnter
      unmountOnExit
      timeout={{ enter: 500, exit: 0, appear: 500 }}
      classNames="fade"
    >
      <Backdrop {...rest} src={`${orinalImageSize + file}`} />
    </CSSTransition>
  );
};

Media.Poster = function MediaPoster({ file, ...rest }) {
  return (
    <CSSTransition
      in={true}
      appear={true}
      mountOnEnter
      unmountOnExit
      timeout={{ enter: 500, exit: 0, appear: 500 }}
      classNames="fade"
    >
      <Poster {...rest} src={`${w200miniature + file}`} />
    </CSSTransition>
  );
};

Media.Video = function MediaVideo({ url, children, ...rest }) {
  return (
    <CSSTransition
      in={true}
      appear={true}
      mountOnEnter
      unmountOnExit
      timeout={{ enter: 500, exit: 0, appear: 500 }}
      classNames="fade"
    >
      <Video {...rest} url={`https://i.ytimg.com/vi/${url}/hqdefault.jpg`}>
        {children}
      </Video>
    </CSSTransition>
  );
};

Media.Play = function MediaPlay({ ...rest }) {
  return <Play {...rest} />;
};
