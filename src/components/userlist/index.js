import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import {
  Outer,
  Container,
  Title,
  Placeholder,
  Header,
  Thumbnail,
  List,
  Input,
  Wrapper,
  Confirm,
  Cancel,
  Tools,
  Inner,
  Button,
  Delete,
  Edit,
} from "./styles/userlist";

export default function Userlist({ children, ...rest }) {
  return <Outer {...rest}>{children}</Outer>;
}

Userlist.Container = function UserlistContainer({
  transitionKey,
  children,
  ...rest
}) {
  return (
    <SwitchTransition mode={"out-in"}>
      <CSSTransition key={transitionKey} classNames="fade" timeout={500}>
        <Container {...rest}>{children}</Container>
      </CSSTransition>
    </SwitchTransition>
  );
};

Userlist.Title = function UserlistTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Userlist.Placeholder = function UserlistPlaceholder({ children, ...rest }) {
  return <Placeholder {...rest}>{children}</Placeholder>;
};

//description

Userlist.Header = function UserlistHeader({ children, ...rest }) {
  return <Header {...rest}>{children}</Header>;
};

Userlist.Thumbnail = function UserlistThumbnail({ ...rest }) {
  return <Thumbnail {...rest} />;
};

Userlist.List = function UserlistList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

Userlist.Input = function UserlistInput({ children, ...rest }) {
  return <Input {...rest} />;
};

Userlist.Wrapper = function UserlistWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Userlist.Button = function UserlistButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};

Userlist.Confirm = function UserlistConfirm({ children, ...rest }) {
  return <Confirm {...rest} />;
};

Userlist.Cancel = function UserlistCancel({ children, ...rest }) {
  return <Cancel {...rest} />;
};

Userlist.Tools = function UserlistTools({ children, ...rest }) {
  return <Tools {...rest}>{children}</Tools>;
};

Userlist.Inner = function UserlistInner({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
};

Userlist.Delete = function UserlistDelete({ children, ...rest }) {
  return <Delete {...rest} />;
};

Userlist.Edit = function UserlistEdit({ children, ...rest }) {
  return <Edit {...rest} />;
};
