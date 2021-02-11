import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  DetailsPanel,
  RelevantList,
  StarRating,
  Votes,
} from "../../components";
import { RelevantListContainer } from "../";
import useAuthListener from "../../hooks/useAuthListener";
import useFetch from "../../hooks/useFetchData";
import useFirestore from "../../hooks/useFirestore";
import { rateLogic } from "../../utils/firebase";
import { getCorrectReviewsArray, offsetListener } from "../../utils/utils";
import { ReviewsContainer } from "./auxillary";
import { useAuthContext } from "../../context";

export default function CardDetailsPanelContainer() {
  const [starValue, setStarValue] = useState(0);
  const [ratedValue, setRatedValue] = useState(0);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [fullReviewsArray, setFullReviewsArray] = useState([]);

  const location = useParams();
  const history = useHistory();

  const firebase = useAuthContext();

  const [user, userLoading] = useAuthListener();

  const [, userRatingData] = useFirestore(
    user && `${user.displayName}`,
    `moviesrated`,
  );

  const [reviewLoading, reviewData] = useFirestore("Reviews", location.slug);

  const [list] = useFetch(location.direction, location.slug, [
    {
      append_to_response:
        "credits,recommendations,images,videos,reviews,account_states",
    },
  ]);

  useEffect(() => {
    if (!reviewLoading && list) {
      if (list.reviews.results.length !== 0) {
        setFullReviewsArray(
          getCorrectReviewsArray(list.reviews.results).concat(reviewData),
        );
      }
    }
  }, [reviewData, list, reviewLoading]);

  useEffect(() => {
    window.addEventListener("scroll", offsetListener);
    return () => window.removeEventListener("scroll", offsetListener);
  }, []);

  useEffect(() => {
    if (userRatingData && userRatingData.length > 0 && list) {
      const rate = userRatingData.find((item) => item.id === list.id);
      if (rate) setRatedValue(rate.value);
    }
  }, [userRatingData, list]);

  const showErrorModal = (errorText) => {
    document.body.style.overflow = "hidden";
    setErrorMessage([errorText]);
    setErrorModalVisible(true);
  };

  const hideErrorModal = () => {
    document.body.style.overflow = "auto";
    setErrorMessage(null);
    setErrorModalVisible(false);
  };

  const handleRate = (rateScore, item) => {
    rateLogic(
      user,
      history,
      userRatingData,
      rateScore,
      firebase,
      showErrorModal,
      item,
    );
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
                onClick={() => {
                  handleRate(i + 1, {
                    id: list.id,
                    title: list.title,
                    date: list.release_date,
                    vote_average: list.vote_average,
                    vote_count: list.vote_count,
                  });
                  setRatedValue(i + 1);
                }}
                key={i}
                indexValue={i + 1}
                starValue={starValue}
                setStarValue={setStarValue}
                ratedValue={ratedValue}
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
      <RelevantListContainer
        recommendations={list.recommendations.results}
        slug={(location.direction = "movie")}
      />
      {fullReviewsArray && (
        <ReviewsContainer
          fullReviewsArray={fullReviewsArray}
          user={user}
          setErrorMessage={setErrorMessage}
          setErrorModalVisible={setErrorModalVisible}
          reviewData={reviewData}
        />
      )}
      {/* TODO ERROR MODAL */}
    </DetailsPanel>
  ) : null;
}
