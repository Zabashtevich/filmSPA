import React from "react";

import {
  Container,
  Header,
  Dropzone,
  Placeholder,
  Dropicon,
  Description,
  Thumbnail,
  Inner,
  Row,
  Input,
  Wrapper,
  Cancel,
  Confirm,
  Edit,
  Abort,
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

Userlist.Description = function UserlistDescription({ children, ...rest }) {
  return <Description {...rest}>{children}</Description>;
};

Userlist.Thumbnail = function UserlistThumbnail({ ...rest }) {
  return <Thumbnail {...rest} />;
};

Userlist.Inner = function UserlistInner({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
};

Userlist.Row = function UserlistRow({ children, ...rest }) {
  return <Row {...rest}>{children}</Row>;
};

Userlist.Input = function UserlistInput({ ...rest }) {
  return <Input {...rest} />;
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

Userlist.Edit = function UserlistEdit({ children, ...rest }) {
  return <Edit {...rest} />;
};

Userlist.Abort = function UserlistAbort({ children, ...rest }) {
  return <Abort {...rest} />;
};
