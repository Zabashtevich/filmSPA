import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { DetailsPanel } from "../../components";
import { UtilityModalContainer } from "../";
import useFetch from "../../hooks/useFetchData";
import { getCombinedReviews } from "../../utils/utils";
import { RatingContainer, ReviewContainer } from "./auxillary";

export default function CardDetailsPanelContainer() {
  const [combinedReviews, setCombinedReviews] = useState({
    processed: true,
    reviews: null,
  });

  const location = useParams();
  const reviewData = useSelector((store) => store.reviewData);
  const [list, loadingList] = useFetch(location.direction, location.slug, [
    {
      append_to_response:
        "credits,recommendations,images,videos,reviews,account_states",
    },
  ]);
  useEffect(() => {
    if (!loadingList && !reviewData.loading) {
      setCombinedReviews({
        processed: false,
        reviews: [
          ...getCombinedReviews(list.reviews.results, reviewData.reviews),
        ],
      });
    }
  }, [loadingList, reviewData]);

  return (
    list && (
      <>
        <UtilityModalContainer />
        <DetailsPanel>
          <DetailsPanel.Wrapper>
            <DetailsPanel.Title>Overview</DetailsPanel.Title>
            <DetailsPanel.Overview>{list.overview}</DetailsPanel.Overview>
          </DetailsPanel.Wrapper>
          <DetailsPanel.Wrapper>
            <DetailsPanel.Title>Rating</DetailsPanel.Title>
            <RatingContainer
              average={list.vote_average}
              votecount={list.vote_count}
            />
          </DetailsPanel.Wrapper>
          <DetailsPanel.Wrapper>
            <DetailsPanel.Title>Reviews</DetailsPanel.Title>
          </DetailsPanel.Wrapper>
          <DetailsPanel.Reviews>
            {!combinedReviews.processed &&
              combinedReviews.reviews.map((item) => {
                return <ReviewContainer key={item.id} item={item} />;
              })}
          </DetailsPanel.Reviews>
        </DetailsPanel>
      </>
    )
  );
}
