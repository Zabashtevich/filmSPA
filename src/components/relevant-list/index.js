import React from "react";
import { baseImageLink } from "../../constants/constants";
import imageerror from "../../assets/404-error.svg";

import {
  ItemContainer,
  Container,
  Miniature,
  Name,
  Title,
  ListContainer,
  Wrapper,
  Score,
} from "./styles/relevant-list";

export default function RelevantList({ children }) {
  return <Container>{children}</Container>;
}

RelevantList.ItemContainer = function RelevantListItemContainer({
  children,
  ...rest
}) {
  return <ItemContainer {...rest}>{children}</ItemContainer>;
};

RelevantList.Miniature = function RelevantListMiniature({ src }) {
  return (
    <Miniature
      src={src ? baseImageLink + src : imageerror}
      imageUndefined={src ? false : true}
    />
  );
};

RelevantList.Name = function RelevantListName({ children }) {
  return <Name>{children}</Name>;
};

RelevantList.Title = function RelevantListTitle({ children }) {
  return <Title>{children}</Title>;
};

RelevantList.ListContainer = function RelevantListContainer({ children }) {
  return <ListContainer>{children}</ListContainer>;
};

RelevantList.VoteScore = function RelevantListVoteScore({ children }) {
  return (
    <Wrapper>
      <Score>{children}</Score>
    </Wrapper>
  );
};
