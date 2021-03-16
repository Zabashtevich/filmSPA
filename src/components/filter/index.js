import React from "react";

import {
  Container,
  Wrapper,
  Title,
  Rating,
  Input,
  Value,
  Category,
  List,
  Amount,
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

Filter.Rating = function FilterRating({ children, ...rest }) {
  return <Rating {...rest}>{children}</Rating>;
};

Filter.Input = function FilterInput({ children, ...rest }) {
  return <Input {...rest}>{children}</Input>;
};

Filter.Value = function FilterValue({ children, ...rest }) {
  return <Value {...rest}>{children}</Value>;
};

Filter.Category = function FilterCategory({ children, ...rest }) {
  return <Category {...rest}>{children}</Category>;
};

Filter.List = function FilterList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

Filter.Amount = function FilterAmount({ children, ...rest }) {
  return <Amount {...rest}>{children}</Amount>;
};
