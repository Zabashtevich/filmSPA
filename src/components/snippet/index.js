import React from "react";
import { CSSTransition } from "react-transition-group";

import {
  Container,
  Element,
  Favorite,
  Userlist,
  Backdrop,
  Item,
  Number,
  Name,
  Wrapper,
  Create,
  Title,
  Input,
  Inner,
  Placeholder,
  Button,
} from "./styles/snippet";

export default function Snippet({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Snippet.Element = function SnippetElement({ children, ...rest }) {
  return <Element {...rest}>{children}</Element>;
};

Snippet.Favorite = function SnippetFavorite({ ...rest }) {
  return <Favorite {...rest} />;
};

Snippet.Userlist = function SnippetUserlist({ ...rest }) {
  return <Userlist {...rest} />;
};

Snippet.Backdrop = function SnippetBackdrop({ visible, children, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      classNames="opacity"
      timeout={{ enter: 500, exit: 500, appear: 500 }}
      mountOnEnter
      unmountOnExit
      appear={true}
    >
      <Backdrop {...rest}>{children}</Backdrop>
    </CSSTransition>
  );
};

Snippet.Item = function SnippetItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Snippet.Placeholder = function SnippetPlaceholder({ ...rest }) {
  return <Placeholder {...rest}>YOU HAVE NOT ANY LISTS</Placeholder>;
};

Snippet.Button = function SnippetButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};

Snippet.Number = function SnippetNumber({ children, ...rest }) {
  return <Number {...rest}>{children}</Number>;
};

Snippet.Name = function SnippetName({ children, ...rest }) {
  return <Name {...rest}>{children}</Name>;
};

Snippet.Inner = function SnippetInner({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
};

Snippet.Create = function SnippetCreate({ visible, children, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      classNames="opacity"
      timeout={{ enter: 500, exit: 500, appear: 500 }}
      mountOnEnter
      unmountOnExit
      appear={true}
    >
      <Create {...rest}>{children}</Create>
    </CSSTransition>
  );
};

Snippet.Title = function SnippetTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Snippet.Wrapper = function SnippetWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Snippet.Input = function SnippetInput({ ...rest }) {
  return <Input {...rest} />;
};
