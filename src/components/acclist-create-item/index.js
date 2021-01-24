import React from "react";

import { CSSTransition } from "react-transition-group";

import {
  Item,
  Placeholder,
  CreateIcon,
  Input,
  Confirm,
  Abort,
  Wrapper,
} from "./styles/acclist-create-item";

export default function AcclistCreateItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
}

AcclistCreateItem.Placeholder = function AcclistCreateItemPlaceholder({
  children,
  ...rest
}) {
  return <Placeholder {...rest}>{children}</Placeholder>;
};

AcclistCreateItem.Wrapper = function AcclistCreateItemWrapper({
  children,
  visible,
  ...rest
}) {
  return (
    <CSSTransition
      in={visible}
      appear={true}
      timeout={{ enter: 500, exit: 600, appear: 300 }}
      classNames="fade"
      unmountOnExit
      mountOnEnter
    >
      <Wrapper {...rest}>{children}</Wrapper>
    </CSSTransition>
  );
};

AcclistCreateItem.CreateIcon = function AcclistCreateItemCreateIcon({
  children,
  visible,
  ...rest
}) {
  return (
    <CSSTransition
      in={!visible}
      appear={true}
      timeout={{ enter: 500, exit: 600, appear: 300 }}
      classNames="fade"
      unmountOnExit
      mountOnEnter
    >
      <CreateIcon {...rest}>{children}</CreateIcon>
    </CSSTransition>
  );
};

AcclistCreateItem.Input = function AcclistCreateItemInput({
  children,
  visible,
  ...rest
}) {
  return (
    <CSSTransition
      in={visible}
      appear={true}
      timeout={{ enter: 200, exit: 300, appear: 300 }}
      classNames="fade"
      unmountOnExit
      mountOnEnter
    >
      <Input {...rest}>{children}</Input>
    </CSSTransition>
  );
};

AcclistCreateItem.Confirm = function AcclistCreateItemConfirm({
  children,
  ...rest
}) {
  return <Confirm {...rest}>{children}</Confirm>;
};

AcclistCreateItem.Abort = function AcclistCreateItemAbort({
  children,
  ...rest
}) {
  return <Abort {...rest}>{children}</Abort>;
};
