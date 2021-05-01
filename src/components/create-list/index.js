import React from "react";

import {
  Container,
  Title,
  Header,
  Input,
  Confirm,
  Loading,
  Info,
  Message,
} from "./styles/create-list";

export default function CreateList({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

CreateList.Title = function CreateListTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

CreateList.Header = function CreateListHeader({ children, ...rest }) {
  return <Header {...rest}>{children}</Header>;
};

CreateList.Input = function CreateListInput({ ...rest }) {
  return <Input {...rest} />;
};

CreateList.Confirm = function CreateListConfirm({ ...rest }) {
  return <Confirm {...rest} />;
};

CreateList.Loading = function CreateListLoading({ ...rest }) {
  return <Loading {...rest} />;
};

CreateList.Info = function CreateListInfo({ ...rest }) {
  return <Info {...rest} />;
};

CreateList.Message = function CreateListMessage({ ...rest }) {
  return <Message {...rest} />;
};
