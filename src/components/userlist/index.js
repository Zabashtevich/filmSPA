import React from "react";

import {
  Container,
  Title,
  List,
  Item,
  Thumbnail,
  Info,
  Inner,
  Name,
  Confirm,
  Decline,
  Row,
  Subtitle,
  Amount,
  Wrapper,
  Edit,
  Delete,
  Placeholder,
  Create,
  Input,
  Accept,
  TurnOn,
  TurnOff,
} from "./styles/userlist";

export default function Userlist({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Userlist.Title = function UserlistTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Userlist.List = function UserlistList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

Userlist.Item = function UserlistItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Userlist.Thumbnail = function UserlistThumbnail({ ...rest }) {
  return <Thumbnail {...rest} />;
};

Userlist.Info = function UserlistInfo({ children, ...rest }) {
  return <Info {...rest}>{children}</Info>;
};

Userlist.Inner = function UserlistInner({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
};

Userlist.Name = function UserlistName({ inputRef, children, ...rest }) {
  return <Name {...rest} ref={inputRef} />;
};

Userlist.Confirm = function UserlistConfirm({ ...rest }) {
  return <Confirm {...rest} />;
};

Userlist.Decline = function UserlistDecline({ ...rest }) {
  return <Decline {...rest} />;
};

Userlist.Row = function UserlistRow({ children, ...rest }) {
  return <Row {...rest}>{children}</Row>;
};

Userlist.Subtitle = function UserlistSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

Userlist.Amount = function UserlistAmount({ children, ...rest }) {
  return <Amount {...rest}>{children}</Amount>;
};

Userlist.Wrapper = function UserlistWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Userlist.Edit = function UserlistEdit({ ...rest }) {
  return <Edit {...rest} />;
};

Userlist.Delete = function UserlistDelete({ ...rest }) {
  return <Delete {...rest} />;
};

Userlist.Create = function UserlistCreate({ children, ...rest }) {
  return <Create {...rest}>{children}</Create>;
};

Userlist.Icon = function UserlistIcon({ ...rest }) {
  return <TurnOn {...rest} />;
};

Userlist.Placeholder = function UserlistPlaceholder({ children, ...rest }) {
  return <Placeholder {...rest}>{children}</Placeholder>;
};

Userlist.Input = function UserlistInput({ children, ...rest }) {
  return <Input {...rest} />;
};

Userlist.Accept = function UserlistAccept({ children, ...rest }) {
  return <Accept {...rest} />;
};
