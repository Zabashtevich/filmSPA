import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  DetailsPanel,
  RelevantList,
  ReviewsList,
  StarRating,
  Votes,
} from "../components";
import useFetch from "../hooks/useFetchData";
import { getCorrectSrc } from "../utils/utils";

export default function CardDetailsPanelContainer({ user }) {
  const [starValue, setStarValue] = useState(0);

  const location = useParams();
  const history = useHistory();

  const { list, loading } = useFetch(["movie"], location.slug, [
    {
      append_to_response:
        "credits,recommendations,images,videos,reviews,account_states",
    },
  ]);

  const handleRate = (rateScore) => {
    if (user === null) {
      history.push("/authentication/login");
    } else {
    }
  };

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
                onClick={() => handleRate(i + 1)}
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
      <RelevantList.Title>Reccomendations</RelevantList.Title>
      <RelevantList>
        <RelevantList.ListContainer>
          {list.recommendations.results.map((item) => {
            return (
              <RelevantList.ItemContainer key={item.id}>
                <RelevantList.Miniature src={item.poster_path} />
                <RelevantList.Name>{item.title}</RelevantList.Name>
                <RelevantList.VoteScore>
                  {item.vote_average}
                </RelevantList.VoteScore>
              </RelevantList.ItemContainer>
            );
          })}
        </RelevantList.ListContainer>
      </RelevantList>
      <ReviewsList>
        <ReviewsList.Title>Reviews</ReviewsList.Title>
        {list.reviews.results.length !== 0 ? (
          <>
            {list.reviews.results.map((item) => {
              const correctSrc =
                item.author_details.avatar_path === null ||
                item.author_details.avatar_path.includes("https")
                  ? getCorrectSrc(item.author_details.avatar_path)
                  : item.author_details.avatar_path;

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
