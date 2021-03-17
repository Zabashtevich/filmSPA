import React from "react";
import { CSSTransition } from "react-transition-group";

import {
  Container,
  Column,
  Poster,
  Nickname,
  List,
  Settings,
  Title,
} from "./styles/account";

export default function Account({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Account.Column = function AccountColumn({ type, visible, children, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      appear={true}
      classNames="fade"
      mountOnEnter
      unmountOnExit
      timeout={500}
      {...rest}
    >
      <Column type={type}>{children}</Column>
    </CSSTransition>
  );
};

Account.Poster = function AccountPoster({ ...rest }) {
  return <Poster {...rest} />;
};

Account.Nickname = function AccountNickname({ children, ...rest }) {
  return <Nickname {...rest}>{children}</Nickname>;
};

Account.List = function AccountList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

Account.Settings = function AccountSettings({ ...rest }) {
  return <Settings {...rest} />;
};

Account.Title = function AccountTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};
