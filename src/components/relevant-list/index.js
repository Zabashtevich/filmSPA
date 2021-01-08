import React from "react";
import { relevantImageLink } from "../../constants/constants";

import {
  ItemContainer,
  Container,
  Miniature,
  Name,
  Title,
  ListContainer,
  Wrapper,
  Score,
  Error,
  ErrorWrapper,
} from "./styles/relevant-list";

export default function RelevantList({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
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
      src={
        src
          ? relevantImageLink + src
          : "../../assets/images/image-not-found.jpg"
      }
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

RelevantList.Error = function RelevantError({ children }) {
  return <Error>{children}</Error>;
};

RelevantList.ErrorWrapper = function RelevantErrorWrapper({ children }) {
  return <ErrorWrapper>{children}</ErrorWrapper>;
};
