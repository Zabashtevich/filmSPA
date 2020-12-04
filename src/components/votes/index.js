import React from "react";

import { Container, Amount, Score, Wrapper } from "./styles/votes";

export default function Votes({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Votes.Wrapper = function VotesWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
};

Votes.VotesScore = function VotesScore({ children }) {
  return <Score>{children}</Score>;
};

Votes.VotesAmount = function VotesAmount({ children }) {
  return <Amount>{children}</Amount>;
};
