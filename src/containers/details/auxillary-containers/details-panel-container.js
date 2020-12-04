import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  DetailsPanel,
  RecommendationsList,
  ReviewsList,
  StarRating,
  Votes,
} from "../../../components";
import useFetch from "../../../hooks/useFetchData";

export default function DetailsPanelContainer() {
  const [starValue, setStarValue] = useState(0);
  const location = useParams();

  const { list, loading } = useFetch(["movie"], location.slug, [
    {
      append_to_response:
        "credits,recommendations,images,videos,reviews,account_states",
    },
  ]);

  return list ? (
    <DetailsPanel>
      <DetailsPanel.ContentWrapper>
        <DetailsPanel.Title>Overview</DetailsPanel.Title>
        <DetailsPanel.Overview>{list.overview}</DetailsPanel.Overview>
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
              <Votes.VotesScore>{list.vote_average} /</Votes.VotesScore>
            </Votes.Wrapper>
            <Votes.Wrapper>
              <Votes.VotesAmount>{list.vote_count}</Votes.VotesAmount>
            </Votes.Wrapper>
          </Votes>
        </StarRating.Wrapper>
      </StarRating>
      <RecommendationsList>
        <RecommendationsList.Title>Reccomendations</RecommendationsList.Title>
        <RecommendationsList.ListContainer>
          {list.recommendations.results.map((item) => {
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
      <ReviewsList>
        <ReviewsList.Title>Reviews</ReviewsList.Title>
        {list.reviews.results.map((item) => {
          return (
            <ReviewsList.ItemContainer key={item.id}>
              <ReviewsList.Author>
                <ReviewsList.Wrapper>
                  <ReviewsList.Nickname>
                    {item.author_details.name}
                  </ReviewsList.Nickname>
                  <ReviewsList.Date>
                    {new Date(item.created_at).toDateString()}
                  </ReviewsList.Date>
                </ReviewsList.Wrapper>
                <ReviewsList.Avatar src={item.avatar_path}></ReviewsList.Avatar>
              </ReviewsList.Author>
              <ReviewsList.Wrapper>
                <ReviewsList.Content>{item.content}</ReviewsList.Content>
                <ReviewsList.Score>
                  {item.author_details.rating}
                </ReviewsList.Score>
              </ReviewsList.Wrapper>
            </ReviewsList.ItemContainer>
          );
        })}
      </ReviewsList>
    </DetailsPanel>
  ) : null;
}
