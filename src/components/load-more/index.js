import React from "react";

import { Container, Wrapper, Button } from "./styles/load-more";

export default function LoadMore({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

LoadMore.Wrapper = function LoadMoreWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

LoadMore.Button = function LoadMoreButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};
