import React from "react";

import {
  Inner,
  Container,
  Title,
  Header,
  Row,
  Input,
  Confirm,
  Loading,
  Info,
  Message,
} from "./styles/create-list";

export default function CreateList({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
}

CreateList.Container = function CreateListContainer({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
};

CreateList.Title = function CreateListTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

CreateList.Header = function CreateListHeader({ children, ...rest }) {
  return <Header {...rest}>{children}</Header>;
};

CreateList.Row = function CreateListRow({ children, ...rest }) {
  return <Row {...rest}>{children}</Row>;
};

CreateList.Input = function CreateListInput({ ...rest }) {
  return <Input {...rest} />;
};

CreateList.Confirm = function CreateListConfirm({ children, ...rest }) {
  return <Confirm {...rest}>{children}</Confirm>;
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
