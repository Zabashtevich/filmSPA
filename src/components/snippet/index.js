import React from "react";

import { Container, Element, Favorite, Userlist } from "./styles/snippet";

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
