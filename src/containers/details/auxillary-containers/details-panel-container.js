import React, { useState } from "react";
import { DetailsPanel, StarRating, Votes } from "../../../components";

export default function DetailsPanelContainer({
  overview,
  votesScore,
  votesAmount,
}) {
  const [starValue, setStarValue] = useState(0);
  return (
    <DetailsPanel>
      <DetailsPanel.ContentWrapper>
        <DetailsPanel.Title>Overview</DetailsPanel.Title>
        <DetailsPanel.Overview>{overview}</DetailsPanel.Overview>
      </DetailsPanel.ContentWrapper>
      <StarRating>
        <StarRating.Title>Rating</StarRating.Title>
        <StarRating.Wrapper>
          {[...Array(10)].map((_, i) => {
            return (
              <StarRating.Star
                key={i}
                indexValue={i + 1}
                starValue={starValue}
                setStarValue={setStarValue}
              />
            );
          })}
          <Votes>
            <Votes.Wrapper>
              <Votes.VotesScore>{votesScore} /</Votes.VotesScore>
            </Votes.Wrapper>
            <Votes.Wrapper>
              <Votes.VotesAmount>{votesAmount}</Votes.VotesAmount>
            </Votes.Wrapper>
          </Votes>
        </StarRating.Wrapper>
      </StarRating>
    </DetailsPanel>
  );
}
