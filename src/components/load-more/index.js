import React from "react";

import { Container, Wrapper, Button } from "./styles/load-more";

export default function LoadMore({ children }) {
  return <Container>{children}</Container>;
}

LoadMore.Wrapper = function LoadMoreWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
};

LoadMore.Button = function LoadMoreButton({ children }) {
  return <Button>{children}</Button>;
};
