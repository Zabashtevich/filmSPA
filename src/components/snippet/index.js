import React from "react";

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
  Add,
  Remove,
  Edit,
  Popup,
  Title,
  Input,
  Confirm,
  Cancel,
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

Snippet.Backdrop = function SnippetBackdrop({ children, ...rest }) {
  return <Backdrop {...rest}>{children}</Backdrop>;
};

Snippet.Item = function SnippetItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Snippet.Placeholder = function SnippetPlaceholder({ ...rest }) {
  return <Placeholder {...rest}>You have not any lists</Placeholder>;
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

Snippet.Add = function SnippetAdd({ ...rest }) {
  return <Add {...rest} />;
};

Snippet.Remove = function SnippetRemove({ ...rest }) {
  return <Remove {...rest} />;
};

Snippet.Edit = function SnippetEdit({ ...rest }) {
  return <Edit {...rest} />;
};

Snippet.Popup = function SnippetPopup({ children, ...rest }) {
  return <Popup {...rest}>{children}</Popup>;
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

Snippet.Confirm = function SnippetConfirm({ ...rest }) {
  return <Confirm {...rest} />;
};

Snippet.Cancel = function SnippetCancel({ ...rest }) {
  return <Cancel {...rest} />;
};
