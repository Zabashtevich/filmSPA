import React from "react";
import { useParams } from "react-router-dom";
import { DetailsPanel } from "../../components";

import useAuthListener from "../../hooks/useAuthListener";
import useFetch from "../../hooks/useFetchData";
import useFirestore from "../../hooks/useFirestore";

export default function CardDetailsPanelContainer() {
  const location = useParams();

  const [user, userLoading] = useAuthListener();
  const [reviewLoading, reviewData] = useFirestore("Reviews", location.slug);

  const [list] = useFetch(location.direction, location.slug, [
    {
      append_to_response:
        "credits,recommendations,images,videos,reviews,account_states",
    },
  ]);

  return (
    list && (
      <DetailsPanel>
        <DetailsPanel.Wrapper>
          <DetailsPanel.Title>Overview</DetailsPanel.Title>
          <DetailsPanel.Overview>{list.overview}</DetailsPanel.Overview>
        </DetailsPanel.Wrapper>
        <DetailsPanel.Wrapper>
          <DetailsPanel.Title>Rating</DetailsPanel.Title>
          <DetailsPanel.Rating>
            <DetailsPanel.Stars average={list.vote_average} />
            <DetailsPanel.Average average={list.vote_average}>
              {list.vote_average}
            </DetailsPanel.Average>
            <DetailsPanel.Votes>{"/" + list.vote_count}</DetailsPanel.Votes>
          </DetailsPanel.Rating>
          <DetailsPanel.UserRating>
            <DetailsPanel.UserWrapper>
              <DetailsPanel.UserTitle>Your vote:</DetailsPanel.UserTitle>
              <DetailsPanel.UserValue>1</DetailsPanel.UserValue>
              <DetailsPanel.Button>Delete</DetailsPanel.Button>
            </DetailsPanel.UserWrapper>
            <DetailsPanel.UserWrapper>
              <DetailsPanel.Time>2021 1</DetailsPanel.Time>
            </DetailsPanel.UserWrapper>
          </DetailsPanel.UserRating>
        </DetailsPanel.Wrapper>
        <DetailsPanel.Wrapper>
          <DetailsPanel.Title>Reviews</DetailsPanel.Title>
        </DetailsPanel.Wrapper>
      </DetailsPanel>
    )
  );
}
