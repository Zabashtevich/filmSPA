import React from "react";

import {
  Item,
  Placeholder,
  CreateIcon,
  Input,
  Confirm,
  Abort,
} from "./styles/acclist-create-item";

export default function AcclistCreateItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
}

AccountList.Placeholder = function AccountListPlaceholder({
  children,
  ...rest
}) {
  return <Placeholder {...rest}>{children}</Placeholder>;
};

AccountList.CreateIcon = function AccountListCreateIcon({ children, ...rest }) {
  return <CreateIcon {...rest}>{children}</CreateIcon>;
};

AccountList.Input = function AccountListInput({ children, visible, ...rest }) {
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

AccountList.Confirm = function AccountListConfirm({
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
      <Confirm {...rest}>{children}</Confirm>
    </CSSTransition>
  );
};

AccountList.Abort = function AccountListAbort({ children, visible, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      appear={true}
      timeout={{ enter: 500, exit: 600, appear: 30000 }}
      classNames="fade"
      unmountOnExit
      mountOnEnter
    >
      <Abort {...rest}>{children}</Abort>
    </CSSTransition>
  );
};
