import React from "react";
import { CSSTransition } from "react-transition-group";
import spinnerCreateList from "./../../assets/spinner-create-list.svg";

import {
  Inner,
  Container,
  Title,
  Header,
  Row,
  Input,
  Confirm,
  Loading,
  Info,
  Message,
} from "./styles/create-userlist";

export default function CreateUserlist({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
}

CreateUserlist.Container = function CreateUserlistContainer({
  children,
  ...rest
}) {
  return <Container {...rest}>{children}</Container>;
};

CreateUserlist.Title = function CreateUserlistTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

CreateUserlist.Header = function CreateUserlistHeader({ children, ...rest }) {
  return <Header {...rest}>{children}</Header>;
};

CreateUserlist.Row = function CreateUserlistRow({ children, ...rest }) {
  return <Row {...rest}>{children}</Row>;
};

CreateUserlist.Input = function CreateUserlistInput({ ...rest }) {
  return <Input {...rest} />;
};

CreateUserlist.Confirm = function CreateUserlistConfirm({ children, ...rest }) {
  return <Confirm {...rest}>{children}</Confirm>;
};

CreateUserlist.Loading = function CreateUserlistLoading({ visible, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      classNames="fade"
      timeout={250}
      mountOnEnter
      unmountOnExit
    >
      <Loading {...rest} src={spinnerCreateList} />
    </CSSTransition>
  );
};

CreateUserlist.Info = function CreateUserlistInfo({ ...rest }) {
  return <Info {...rest} />;
};

CreateUserlist.Message = function CreateUserlistMessage({ ...rest }) {
  return <Message {...rest} />;
};
