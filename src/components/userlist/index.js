import React from "react";

import {
  Container,
  Title,
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
  Edit,
  Delete,
} from "./styles/userlist";

export default function Userlist({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Userlist.Title = function UserlistTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
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

Userlist.Name = function UserlistName({ children, ...rest }) {
  return <Name {...rest} />;
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

Userlist.Edit = function UserlistEdit({ ...rest }) {
  return <Edit {...rest} />;
};

Userlist.Delete = function UserlistDelete({ ...rest }) {
  return <Delete {...rest} />;
};
