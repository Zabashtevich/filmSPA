import React from "react";

import {
  Container,
  Header,
  Dropzone,
  Placeholder,
  Dropicon,
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
