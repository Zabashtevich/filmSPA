import React from "react";

import {
  Container,
  Title,
  Item,
  Wrapper,
  Name,
  Element,
  Select,
  Option,
  Button,
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

Filter.Select = function FilterSelect({ children, ...rest }) {
  return <Select {...rest}>{children}</Select>;
};

Filter.Option = function FilterOption({ children, ...rest }) {
  return <Option {...rest}>{children}</Option>;
};

Filter.Button = function FilterButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};
