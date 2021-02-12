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

export default function AccountUserLists({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

AccountUserLists.List = function AccountUserListsList(children, ...rest) {
  return <List {...rest}>{children}</List>;
};

AccountUserLists.Thumbnail = function AccountUserListsThumbnail(
  children,
  ...rest
) {
  return <Thumbnail {...rest}>{children}</Thumbnail>;
};

AccountUserLists.Wrapper = function AccountUserListsWrapper(children, ...rest) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

AccountUserLists.Row = function AccountUserListsRow(children, ...rest) {
  return <Row {...rest}>{children}</Row>;
};

AccountUserLists.Title = function AccountUserListsTitle(children, ...rest) {
  return <Title {...rest}>{children}</Title>;
};

AccountUserLists.Content = function AccountUserListsContent(children, ...rest) {
  return <Content {...rest}>{children}</Content>;
};

AccountUserLists.Rename = function AccountUserListsRename(children, ...rest) {
  return <Rename {...rest}>{children}</Rename>;
};

AccountUserLists.Delete = function AccountUserListsDelete(children, ...rest) {
  return <Delete {...rest}>{children}</Delete>;
};

AccountUserLists.Create = function AccountUserListsCreate(children, ...rest) {
  return <Create {...rest}>{children}</Create>;
};

AccountUserLists.Placeholder = function AccountUserListsPlaceholder(
  children,
  ...rest
) {
  return <Placeholder {...rest}>{children}</Placeholder>;
};
