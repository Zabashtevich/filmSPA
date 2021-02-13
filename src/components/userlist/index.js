import React from "react";

import {
  List,
  Thumbnail,
  Wrapper,
  Row,
  Title,
  Content,
  Inner,
  Rename,
  Delete,
  Create,
  Placeholder,
} from "./styles/userlist";

export default function Userlist({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
}

Userlist.Thumbnail = function UserlistThumbnail({ ...rest }) {
  return <Thumbnail {...rest} />;
};

Userlist.Wrapper = function UserlistWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Userlist.Row = function UserlistRow({ children, ...rest }) {
  return <Row {...rest}>{children}</Row>;
};

Userlist.Title = function UserlistTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Userlist.Content = function UserlistContent({ children, ...rest }) {
  return <Content {...rest}>{children}</Content>;
};

Userlist.Inner = function UserlistInner({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
};

Userlist.Rename = function UserlistRename({ ...rest }) {
  return <Rename {...rest} />;
};

Userlist.Delete = function UserlistDelete({ ...rest }) {
  return <Delete {...rest} />;
};

Userlist.Create = function UserlistCreate({ children, ...rest }) {
  return <Create {...rest}>{children}</Create>;
};

Userlist.Placeholder = function UserlistPlaceholder({ children, ...rest }) {
  return <Placeholder {...rest}>{children}</Placeholder>;
};
