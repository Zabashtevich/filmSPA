import React from "react";

import {
  Container,
  Title,
  Category,
  Default,
  Edit,
  Userlist,
  Links,
  Arrow,
} from "./styles/menu";

export default function Menu({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Menu.Title = function MenuTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Menu.Category = function MenuCategory({ children, ...rest }) {
  return <Category {...rest}>{children}</Category>;
};

Menu.Default = function MenuDefault({ ...rest }) {
  return <Default {...rest} />;
};

Menu.Edit = function MenuEdit({ ...rest }) {
  return <Edit {...rest} />;
};

Menu.Userlist = function MenuUserlist({ ...rest }) {
  return <Userlist {...rest} />;
};

Menu.Links = function MenuLinks({ ...rest }) {
  return <Links {...rest} />;
};

Menu.Arrow = function MenuArrow({ ...rest }) {
  return <Arrow {...rest} />;
};
