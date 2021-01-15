import React from "react";

import {
  Container,
  Nickname,
  Wrapper,
  RatedContainer,
  RatedItemWrapper,
  ColumnContainer,
  Avatar,
} from "./styles/account";

export default function Account({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Account.Nickname = function AccountNickname({ children, ...rest }) {
  return <Nickname {...rest}>{children}</Nickname>;
};

Account.Wrapper = function AccountWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Account.RatedContainer = function AccountRatedContainer({ children, ...rest }) {
  return <RatedContainer {...rest}>{children}</RatedContainer>;
};

Account.RatedItemWrapper = function AccountRatedItemWrapper({
  children,
  ...rest
}) {
  return <RatedItemWrapper {...rest}>{children}</RatedItemWrapper>;
};

Account.ColumnContainer = function AccountColumnContainer({
  children,
  ...rest
}) {
  return <ColumnContainer {...rest}>{children}</ColumnContainer>;
};

Account.Avatar = function AccountAvatar({ children, ...rest }) {
  return <Avatar {...rest} />;
};
