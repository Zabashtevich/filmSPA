import React from "react";
import { CSSTransition } from "react-transition-group";

import { Container, Message, List, Item, Error, Info } from "./styles/notice";

export default function Notice({ visible, children, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      appear={true}
      mountOnEnter
      unmountOnExit
      classNames="slide"
      timeout={500}
    >
      <Container {...rest}>{children}</Container>
    </CSSTransition>
  );
}

Notice.Error = function NoticeError({ ...rest }) {
  return <Error {...rest} />;
};

Notice.Info = function NoticeInfo({ ...rest }) {
  return <Info {...rest} />;
};

Notice.Message = function NoticeMessage({ children, ...rest }) {
  return <Message {...rest}>{children}</Message>;
};

Notice.List = function NoticeList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

Notice.Item = function NoticeItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};
