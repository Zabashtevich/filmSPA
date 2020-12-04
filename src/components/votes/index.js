import React from "react";

import { Container, Wrapper, Amount, Score } from "./styles/votes";

export default function Votes({ children }) {
  return <Container>{children}</Container>;
}

Votes.Wrapper = function Wrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
};

Votes.VotesScore = function VotesScore({ children }) {
  return <Score>{children}</Score>;
};

Votes.VotesAmount = function VotesAmount({ children }) {
  return <Amount>{children}</Amount>;
};
