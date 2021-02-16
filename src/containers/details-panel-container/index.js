import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { DetailsPanel } from "../../components";
import {
  StatePaginationContainer,
  UtilityModalContainer,
  WarningContainer,
} from "../";
import useFetch from "../../hooks/useFetchData";
import { getCombinedReviews } from "../../utils/utils";
import { RatingContainer, ReviewContainer } from "./auxillary";

export default function CardDetailsPanelContainer() {
  const reviewData = useSelector((store) => store.reviewData);
  const userProfile = useSelector((store) => store.userProfile);
  const params = useParams();

  const [combinedReviews, setCombinedReviews] = useState({
    processed: true,
    reviews: null,
  });

  const [paginationSettings, setPaginationSettings] = useState({
    active: 1,
    amount: 5,
  });

  const { amount, active } = paginationSettings;
  const { profile, profileLoading } = userProfile;

  const [list, loadingList] = useFetch(params.direction, params.slug, [
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
        <WarningContainer />
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
              combinedReviews.reviews.slice(0, amount * active).map((item) => {
                return <ReviewContainer key={item.id} item={item} />;
              })}
            {!combinedReviews.processed &&
              !profileLoading &&
              profile !== null && (
                <DetailsPanel.CreateReview to="/">
                  CREATE OWN REVIEW
                </DetailsPanel.CreateReview>
              )}
            {!combinedReviews.processed && (
              <StatePaginationContainer
                total={Math.ceil(combinedReviews.reviews.length / 5)}
                setPaginationSettings={setPaginationSettings}
                active={active}
              />
            )}
          </DetailsPanel.Reviews>
        </DetailsPanel>
      </>
    )
  );
}
