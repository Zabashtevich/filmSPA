import React from "react";

import {
  Element,
  Userlist,
  Favorite,
  Container,
  Item,
  Add,
  Remove,
  Name,
  Edit,
  Delete,
  Create,
  Ok,
  Cancel,
} from "./styles/snippet";

export default function Snippet({ children, ...rest }) {
  return <Element {...rest}>{children}</Element>;
}

Snippet.Userlist = function SnippetUserlist({ ...rest }) {
  return <Userlist {...rest} />;
};

Snippet.Favorite = function SnippetFavorite({ ...rest }) {
  return <Favorite {...rest} />;
};

Snippet.Container = function SnippetContainer({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
};

Snippet.Item = function SnippetItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Snippet.Add = function SnippetAdd({ ...rest }) {
  return <Add {...rest} />;
};

Snippet.Remove = function SnippetRemove({ ...rest }) {
  return <Remove {...rest} />;
};

Snippet.Name = function SnippetName({ ...rest }) {
  return <Name {...rest} />;
};

Snippet.Edit = function SnippetEdit({ ...rest }) {
  return <Edit {...rest} />;
};

Snippet.Delete = function SnippetDelete({ ...rest }) {
  return <Delete {...rest} />;
};

Snippet.Create = function SnippetCreate({ children, ...rest }) {
  return <Create {...rest} />;
};

Snippet.Ok = function SnippetOk({ ...rest }) {
  return <Ok {...rest} />;
};

Snippet.Cancel = function SnippetCancel({ ...rest }) {
  return <Cancel {...rest} />;
};
