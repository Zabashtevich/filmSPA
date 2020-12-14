import React from "react";

import { Container, Wrapper, Button } from "./styles/load-more";

export default function LoadMore({ children }) {
  <Container>{children}</Container>;
}

LoadMore.Wrapper = function LoadMoreWrapper({ children }) {
  <Wrapper>{children}</Wrapper>;
};

LoadMore.Button = function LoadMoreButton({ children }) {
  <Button>{children}</Button>;
};
