import React from "react";
import { CSSTransition } from "react-transition-group";

import {
  Element,
  Userlist,
  Favorite,
  FavInner,
  UslistInner,
  Container,
  Item,
  Circle,
  Add,
  Remove,
  Name,
  Wrapper,
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
  return (
    <UslistInner>
      <Userlist {...rest} />
    </UslistInner>
  );
};

Snippet.Favorite = function SnippetFavorite({ ...rest }) {
  return (
    <FavInner>
      <Favorite {...rest} />
    </FavInner>
  );
};

Snippet.Container = function SnippetContainer({ visible, children, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      appear={true}
      classNames="opacity"
      mountOnEnter
      unmountOnExit
      timeout={500}
    >
      <Container {...rest}>{children}</Container>
    </CSSTransition>
  );
};

Snippet.Item = function SnippetItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Snippet.Circle = function SnippetCircle({ children, ...rest }) {
  return <Circle {...rest}>{children}</Circle>;
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

Snippet.Wrapper = function SnippetWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
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
