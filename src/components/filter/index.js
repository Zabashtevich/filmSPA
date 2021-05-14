import React from "react";

import {
  Outer,
  Title,
  Wrapper,
  Inner,
  List,
  Row,
  Name,
  Value,
  Subtitle,
  Select,
  Option,
} from "./styles/filter";

export default function Filter({ children, ...rest }) {
  return <Outer {...rest}>{children}</Outer>;
}

Filter.Title = function FilterTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Filter.Wrapper = function FilterWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Filter.Inner = function FilterInner({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
};

Filter.List = function FilterList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

Filter.Row = function FilterRow({ children, ...rest }) {
  return <Row {...rest}>{children}</Row>;
};

Filter.Name = function FilterName({ children, ...rest }) {
  return <Name {...rest}>{children}</Name>;
};

Filter.Value = function FilterValue({ children, ...rest }) {
  return <Value {...rest}>{children}</Value>;
};

Filter.Subtitle = function FilterSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

Filter.Select = function FilterSelect({ children, ...rest }) {
  return <Select {...rest}>{children}</Select>;
};

Filter.Option = function FilterOption({ children, ...rest }) {
  return <Option {...rest}>{children}</Option>;
};
