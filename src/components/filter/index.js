import React from "react";

import {
  Container,
  Title,
  Item,
  Wrapper,
  Name,
  Element,
} from "./styles/filter";

export default function Filter({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Filter.Title = function FilterTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Filter.Item = function FilterItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Filter.Name = function FilterName({ children, ...rest }) {
  return <Name {...rest}>{children}</Name>;
};

Filter.Wrapper = function FilterWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Filter.Element = function FilterElement({ children, ...rest }) {
  return <Element {...rest}>{children}</Element>;
};
