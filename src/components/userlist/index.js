import React from "react";

import {
  Outer,
  Container,
  Title,
  Placeholder,
  Header,
  Thumbnail,
  Inner,
  Input,
  Info,
  Subtitle,
  Date,
  Wrapper,
  Confirm,
  Cancel,
  Tools,
  Delete,
  Edit,
} from "./styles/userlist";

export default function Userlist({ children, ...rest }) {
  return <Outer {...rest}>{children}</Outer>;
}

Userlist.Container = function UserlistContainer({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
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

Userlist.Inner = function UserlistInner({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
};

Userlist.Input = function UserlistInput({ children, ...rest }) {
  return <Input {...rest} />;
};

Userlist.Info = function UserlistInfo({ children, ...rest }) {
  return <Info {...rest}>{children}</Info>;
};

Userlist.Subtitle = function UserlistSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

Userlist.Date = function UserlistDate({ children, ...rest }) {
  return <Date {...rest}>{children}</Date>;
};

Userlist.Wrapper = function UserlistWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
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

Userlist.Delete = function UserlistDelete({ children, ...rest }) {
  return <Delete {...rest} />;
};

Userlist.Edit = function UserlistEdit({ children, ...rest }) {
  return <Edit {...rest} />;
};
