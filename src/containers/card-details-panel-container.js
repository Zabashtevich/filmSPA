import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  DetailsPanel,
  RecommendationsList,
  ReviewsList,
  StarRating,
  Votes,
} from "../components";
import useFetch from "../hooks/useFetchData";
import { getCorrectSrc } from "../utils/utils";

export default function CardDetailsPanelContainer() {
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
      <RecommendationsList.Title>Reccomendations</RecommendationsList.Title>
      <RecommendationsList>
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
        {list.reviews.results.length !== 0 ? (
          <>
            {list.reviews.results.map((item) => {
              const correctSrc =
                item.author_details.avatar_path.includes("https") ||
                item.author_details.avatar_path === null
                  ? getCorrectSrc(item.author_details.avatar_path)
                  : item.author_details.avatar_path;
              console.log(correctSrc);
              return (
                <ReviewsList.ItemContainer key={item.id}>
                  <ReviewsList.Author>
                    <ReviewsList.Avatar
                      src={correctSrc.changed ? null : correctSrc}
                      correctSrc={correctSrc.changed ? correctSrc.src : null}
                    />
                    <ReviewsList.Score>
                      {item.author_details.rating}
                    </ReviewsList.Score>
                    <ReviewsList.Wrapper>
                      <ReviewsList.Nickname>
                        {item.author_details.name}
                      </ReviewsList.Nickname>
                      <ReviewsList.Date>
                        {new Date(item.created_at).toDateString()}
                      </ReviewsList.Date>
                    </ReviewsList.Wrapper>
                  </ReviewsList.Author>
                  <ReviewsList.Content>{item.content}</ReviewsList.Content>
                </ReviewsList.ItemContainer>
              );
            })}
          </>
        ) : (
          <ReviewsList.ItemContainer>
            <ReviewsList.NoReviews />
          </ReviewsList.ItemContainer>
        )}
      </ReviewsList>
    </DetailsPanel>
  ) : null;
}
