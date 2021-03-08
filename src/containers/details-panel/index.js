import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { DetailsPanel } from "../../components";
import {
  ProcessWindowContainer,
  StatePaginationContainer,
  ModalContainer,
} from "../";
import { useFetch } from "../../hooks";
import { getCombinedReviews } from "../../utils/utils";
import { RatingContainer, ReviewContainer } from "./auxillary";

export default function CardDetailsPanelContainer() {
  const reviewData = useSelector((store) => store.reviewData);
  const userProfile = useSelector((store) => store.userProfile);
  const { direction, slug } = useParams();

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

  const [list, loadingList] = useFetch(direction, slug);

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
        <ProcessWindowContainer />
        <ModalContainer />
        <DetailsPanel>
          <DetailsPanel.Wrapper>
            <DetailsPanel.Title>Overview</DetailsPanel.Title>
            <DetailsPanel.Overview>{list.overview}</DetailsPanel.Overview>
          </DetailsPanel.Wrapper>
          <DetailsPanel.Wrapper>
            <DetailsPanel.Title>Rating</DetailsPanel.Title>
            <RatingContainer list={list} />
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
