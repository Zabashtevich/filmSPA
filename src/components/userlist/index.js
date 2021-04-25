import React from "react";

import {
  Container,
  Header,
  Dropzone,
  Placeholder,
  Dropicon,
  List,
  Thumbnail,
  Outer,
  Row,
  Input,
  Wrapper,
  Confirm,
  Cancel,
  Subrow,
  Subtitle,
  Date,
  Tools,
  Inner,
  Edit,
  Delete,
} from "./styles/userlist";

export default function Userlist({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Userlist.Header = function UserlistHeader({ children, ...rest }) {
  return <Header {...rest}>{children}</Header>;
};

Userlist.Dropzone = function UserlistDropzone({ children, ...rest }) {
  return <Dropzone {...rest}>{children}</Dropzone>;
};

Userlist.Placeholder = function UserlistPlaceholder({ children, ...rest }) {
  return <Placeholder {...rest}>{children}</Placeholder>;
};

Userlist.Dropicon = function UserlistDropicon({ ...rest }) {
  return <Dropicon {...rest} />;
};

Userlist.List = function UserlistList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

Userlist.Thumbnail = function UserlistThumbnail({ ...rest }) {
  return <Thumbnail {...rest} />;
};

Userlist.Outer = function UserlistOuter({ children, ...rest }) {
  return <Outer {...rest}>{children}</Outer>;
};

Userlist.Row = function UserlistRow({ children, ...rest }) {
  return <Row {...rest}>{children}</Row>;
};

Userlist.Input = function UserlistInput({ inputRef, ...rest }) {
  return <Input {...rest} ref={inputRef} />;
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

Userlist.Subrow = function UserlistSubrow({ children, ...rest }) {
  return <Subrow {...rest}>{children}</Subrow>;
};

Userlist.Subtitle = function UserlistSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

Userlist.Date = function UserlistDate({ children, ...rest }) {
  return <Date {...rest}>{children}</Date>;
};

Userlist.Tools = function UserlistTools({ children, ...rest }) {
  return <Tools {...rest}>{children}</Tools>;
};

Userlist.Inner = function UserlistInner({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
};

Userlist.Edit = function UserlistEdit({ children, ...rest }) {
  return <Edit {...rest} />;
};

Userlist.Delete = function UserlistDelete({ children, ...rest }) {
  return <Delete {...rest} />;
};
