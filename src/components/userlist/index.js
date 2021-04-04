import React from "react";

import {
  Container,
  Inner,
  Title,
  Subtitle,
  Input,
  Wrapper,
  Confirm,
  Cancel,
  Header,
  Wallpaper,
  Info,
  Row,
  Fieldname,
  Fieldvalue,
  Edit,
} from "./styles/userlist";

export default function Userlist({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Userlist.Inner = function UserlistInner({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
};

Userlist.Title = function UserlistTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Userlist.Subtitle = function UserlistSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

Userlist.Input = function UserlistInput({ ...rest }) {
  return <Input {...rest} />;
};

Userlist.Wrapper = function UserlistWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Userlist.Confirm = function UserlistConfirm({ children, ...rest }) {
  return <Confirm {...rest}>{children}</Confirm>;
};

Userlist.Cancel = function UserlistCancel({ children, ...rest }) {
  return <Cancel {...rest}>{children}</Cancel>;
};

Userlist.Header = function UserlistHeader({ children, ...rest }) {
  return <Header {...rest}>{children}</Header>;
};

Userlist.Wallpaper = function UserlistWallpaper({ children, ...rest }) {
  return <Wallpaper {...rest}>{children}</Wallpaper>;
};

Userlist.Info = function UserlistInfo({ children, ...rest }) {
  return <Info {...rest}>{children}</Info>;
};

Userlist.Row = function UserlistRow({ children, ...rest }) {
  return <Row {...rest}>{children}</Row>;
};

Userlist.Fieldname = function UserlistFieldname({ children, ...rest }) {
  return <Fieldname {...rest}>{children}</Fieldname>;
};

Userlist.Fieldvalue = function UserlistFieldvalue({ children, ...rest }) {
  return <Fieldvalue {...rest}>{children}</Fieldvalue>;
};

Userlist.Edit = function UserlistEdit({ children, ...rest }) {
  return <Edit {...rest} />;
};
