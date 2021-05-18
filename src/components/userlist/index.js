import React from "react";

import {
  Outer,
  Container,
  Title,
  Header,
  Thumbnail,
  List,
  Input,
  Wrapper,
  Confirm,
  Cancel,
  Tools,
  EditButton,
  Button,
  Delete,
  Edit,
  Placeholder,
} from "./styles/userlist";

export default function Userlist({ children, ...rest }) {
  return <Outer {...rest}>{children}</Outer>;
}

Userlist.Container = function UserlistContainer({
  transitionKey,
  children,
  ...rest
}) {
  return <Container {...rest}>{children}</Container>;
};

Userlist.Title = function UserlistTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
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

Userlist.EditButton = function UserlistEditButton({ children, ...rest }) {
  return <EditButton {...rest}>{children}</EditButton>;
};

Userlist.Delete = function UserlistDelete({ children, ...rest }) {
  return <Delete {...rest} />;
};

Userlist.Edit = function UserlistEdit({ children, ...rest }) {
  return <Edit {...rest} />;
};

Userlist.Placeholder = function UserlistPlaceholder({ children, ...rest }) {
  return <Placeholder {...rest}>{children}</Placeholder>;
};
