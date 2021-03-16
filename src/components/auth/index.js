import React from "react";
import { CSSTransition } from "react-transition-group";

import { SpinnerSmall } from "./../loading-spinner";
import {
  Container,
  Title,
  Form,
  Input,
  Spinner,
  Inner,
  Button,
  Redirect,
  Link,
  Wrapper,
  Error,
  Placeholder,
} from "./styles/auth";

export default function Auth({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Auth.Title = function AuthTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Auth.Placeholder = function AuthPlaceholder({ children, ...rest }) {
  return <Placeholder {...rest}>{children}</Placeholder>;
};

Auth.Form = function AuthForm({ children, ...rest }) {
  return <Form {...rest}>{children}</Form>;
};

Auth.Input = function AuthInput({ inputRef, ...rest }) {
  return <Input {...rest} ref={inputRef} />;
};

Auth.Spinner = function AuthSpinner({ visible, ...rest }) {
  return (
    <Spinner {...rest}>
      <CSSTransition
        in={visible}
        classNames="fade"
        timeout={2000}
        mountOnEnter
        unmountOnExit
        appear={true}
      >
        <Inner>
          <SpinnerSmall />
        </Inner>
      </CSSTransition>
    </Spinner>
  );
};

Auth.Button = function AuthButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};

Auth.Redirect = function AuthRedirect({ children, ...rest }) {
  return <Redirect {...rest}>{children}</Redirect>;
};

Auth.Link = function AuthLink({ children, ...rest }) {
  return <Link {...rest}>{children}</Link>;
};

Auth.Wrapper = function AuthWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Auth.Error = function AuthError({ children, ...rest }) {
  return <Error {...rest}>{children}</Error>;
};
