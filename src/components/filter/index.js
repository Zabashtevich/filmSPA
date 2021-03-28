import React from "react";

import {
  Container,
  Title,
  Wrapper,
  Row,
  Name,
  Value,
  Subtitle,
  Input,
} from "./styles/filter";

export default function Filter({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Filter.Title = function FilterTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Filter.Wrapper = function FilterWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
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

Filter.Input = function FilterInput({ ...rest }) {
  return <Input {...rest} />;
};
