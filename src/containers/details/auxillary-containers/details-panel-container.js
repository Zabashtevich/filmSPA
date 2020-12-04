import React, { useState } from "react";
import {
  DetailsPanel,
  RecommendationsList,
  StarRating,
  Votes,
} from "../../../components";

export default function DetailsPanelContainer({
  overview,
  votesScore,
  votesAmount,
  recommendationList,
}) {
  const [starValue, setStarValue] = useState(0);

  console.log(recommendationList);
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
      <RecommendationsList>
        <RecommendationsList.Title>Reccomendations</RecommendationsList.Title>
        <RecommendationsList.ListContainer>
          {recommendationList.map((item) => {
            return (
              <RecommendationsList.ItemContainer key={item.id}>
                <RecommendationsList.Miniature src={item.poster_path} />
                <RecommendationsList.Name>
                  {item.title}
                </RecommendationsList.Name>
                <RecommendationsList.VoteScore>
                  {item.vote_average}
                </RecommendationsList.VoteScore>
              </RecommendationsList.ItemContainer>
            );
          })}
        </RecommendationsList.ListContainer>
      </RecommendationsList>
    </DetailsPanel>
  );
}
