import React from "react";

import {
  Container,
  Wrapper,
  Title,
  Value,
  Subtitle,
  Select,
  Option,
} from "./styles/filter";

export default function Filter({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Filter.Wrapper = function FilterWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Filter.Title = function FilterTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
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
