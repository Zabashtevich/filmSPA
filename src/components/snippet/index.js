import React from "react";
import { CSSTransition } from "react-transition-group";

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
  return <Userlist title="Add movie to your userlists" {...rest} />;
};

Snippet.Favorite = function SnippetFavorite({ ...rest }) {
  return <Favorite title="Add movie to your favorite" {...rest} />;
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

Snippet.Add = function SnippetAdd({ ...rest }) {
  return <Add title="Add movie to list" {...rest} />;
};

Snippet.Remove = function SnippetRemove({ ...rest }) {
  return <Remove title="Remove movie from list" {...rest} />;
};

Snippet.Name = function SnippetName({ inputRef, ...rest }) {
  return <Name ref={inputRef} {...rest} />;
};

Snippet.Edit = function SnippetEdit({ visible, setSnippetSettings, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      classNames="opacity"
      mountOnEnter
      unmountOnExit
      timeout={500}
      onEnter={() =>
        setSnippetSettings((prev) => ({ ...prev, editButtonsDelay: true }))
      }
      onExited={() =>
        setSnippetSettings((prev) => ({ ...prev, editButtonsDelay: false }))
      }
    >
      <Edit title="Rename your list" {...rest} />
    </CSSTransition>
  );
};

Snippet.Delete = function SnippetDelete({
  visible,
  setSnippetSettings,
  ...rest
}) {
  return (
    <CSSTransition
      in={visible}
      classNames="opacity"
      mountOnEnter
      unmountOnExit
      timeout={500}
      onEnter={() =>
        setSnippetSettings((prev) => ({ ...prev, editButtonsDelay: true }))
      }
      onExited={() =>
        setSnippetSettings((prev) => ({ ...prev, editButtonsDelay: false }))
      }
    >
      <Delete title="Delete your list" {...rest} />
    </CSSTransition>
  );
};

Snippet.Create = function SnippetCreate({ children, ...rest }) {
  return <Create title="Create list" {...rest} />;
};

Snippet.Ok = function SnippetOk({ visible, setSnippetSettings, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      classNames="opacity"
      mountOnEnter
      unmountOnExit
      timeout={500}
      onEnter={() =>
        setSnippetSettings((prev) => ({ ...prev, defaultButtonsDelay: true }))
      }
      onExited={() =>
        setSnippetSettings((prev) => ({ ...prev, defaultButtonsDelay: false }))
      }
    >
      <Ok title="OK" {...rest} />
    </CSSTransition>
  );
};

Snippet.Cancel = function SnippetCancel({
  visible,
  setSnippetSettings,
  ...rest
}) {
  return (
    <CSSTransition
      in={visible}
      classNames="opacity"
      mountOnEnter
      unmountOnExit
      timeout={500}
      onEnter={() =>
        setSnippetSettings((prev) => ({ ...prev, defaultButtonsDelay: true }))
      }
      onExited={() =>
        setSnippetSettings((prev) => ({ ...prev, defaultButtonsDelay: false }))
      }
    >
      <Cancel title="Cancel" {...rest} />
    </CSSTransition>
  );
};
