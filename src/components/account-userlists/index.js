import React from "react";

import {
  Container,
  List,
  Thumbnail,
  Wrapper,
  Row,
  Title,
  Content,
  Rename,
  Delete,
  Create,
  Placeholder,
} from "./styles/account-userlists";

export default function AccountUserlists({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

AccountUserlists.List = function AccountUserlistsList(children, ...rest) {
  return <List {...rest}>{children}</List>;
};

AccountUserlists.Thumbnail = function AccountUserlistsThumbnail(
  children,
  ...rest
) {
  return <Thumbnail {...rest}>{children}</Thumbnail>;
};

AccountUserlists.Wrapper = function AccountUserlistsWrapper(children, ...rest) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

AccountUserlists.Row = function AccountUserlistsRow(children, ...rest) {
  return <Row {...rest}>{children}</Row>;
};

AccountUserlists.Title = function AccountUserlistsTitle(children, ...rest) {
  return <Title {...rest}>{children}</Title>;
};

AccountUserlists.Content = function AccountUserlistsContent(children, ...rest) {
  return <Content {...rest}>{children}</Content>;
};

AccountUserlists.Rename = function AccountUserlistsRename(children, ...rest) {
  return <Rename {...rest}>{children}</Rename>;
};

AccountUserlists.Delete = function AccountUserlistsDelete(children, ...rest) {
  return <Delete {...rest}>{children}</Delete>;
};

AccountUserlists.Create = function AccountUserlistsCreate(children, ...rest) {
  return <Create {...rest}>{children}</Create>;
};

AccountUserlists.Placeholder = function AccountUserlistsPlaceholder(
  children,
  ...rest
) {
  return <Placeholder {...rest}>{children}</Placeholder>;
};
