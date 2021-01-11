import React, { useState, useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  DetailsPanel,
  RelevantList,
  ReviewsList,
  StarRating,
  Votes,
} from "../components";
import { AuthContext } from "../context/auth-context";
import useAuthListener from "../hooks/useAuthListener";
import useFetch from "../hooks/useFetchData";
import useFirestore from "../hooks/useFirestore";
import {
  getCorrectReviewsArray,
  getCorrectSrc,
  offsetListener,
} from "../utils/utils";
import {
  ErrorModalContainer,
  RelevantListContainer,
} from "./auxillary-containers";
import AuxillaryPaginationContainer from "./auxillary-containers/containers/auxillary-pagination-container";
import ReviewItemContainer from "./auxillary-containers/containers/review-item-container";

export default function CardDetailsPanelContainer() {
  const [starValue, setStarValue] = useState(0);
  const [ratedValue, setRatedValue] = useState(0);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [fullReviewsArray, setFullReviewsArray] = useState([]);

  const location = useParams();
  const history = useHistory();

  const { firebase } = useContext(AuthContext);

  const { user } = useAuthListener();

  const [, userRatingData] = useFirestore(
    user && `${user.displayName}`,
    `moviesrated`,
  );

  const [reviewLoading, reviewData] = useFirestore("Reviews", location.slug);

  const { list } = useFetch(location.direction, location.slug, [
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

  const handleRate = (rateScore, itemID) => {
    if (user === null) {
      history.push("/authentication/login");
    } else {
      const newUserRatingData = [
        ...userRatingData,
        { id: itemID, value: rateScore },
      ];
      firebase
        .firestore()
        .collection(`${user.displayName}`)
        .doc(`moviesrated`)
        .update({ list: newUserRatingData })
        .catch((error) => showErrorModal(error));
    }
  };

  const reviewRedirectPage = () => {
    if (!user) {
      setErrorMessage(["Please, log in to create review"]);
      setErrorModalVisible(true);
      setTimeout(() => history.push("/authentication/login"), 3000);
    }
    if (reviewData.find((item) => item.nickname === user.displayName)) {
      setErrorMessage([
        "Sorry, but you alreay have own review on this page",
        "Please edit you review or delete it to create new",
      ]);
      setErrorModalVisible(true);
    } else {
      history.push(`${location.slug}/review`);
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
                onClick={() => {
                  handleRate(i + 1, list.id);
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
      <ReviewsList>
        {!reviewLoading && list.reviews.results.length !== 0 ? (
          <>
            <ReviewsList.HeaderWrapper>
              <ReviewsList.Title>Reviews</ReviewsList.Title>
              <ReviewsList.AmountWrapper>
                <ReviewsList.AmountTitle>amount</ReviewsList.AmountTitle>
                <ReviewsList.ReviewsAmount>
                  {fullReviewsArray.length}
                </ReviewsList.ReviewsAmount>
              </ReviewsList.AmountWrapper>
            </ReviewsList.HeaderWrapper>
            {fullReviewsArray.map((item) => {
              const correctSrc =
                item.avatar === null || item.avatar.includes("https")
                  ? getCorrectSrc(item.avatar)
                  : item.avatar;
              return (
                <ReviewItemContainer
                  key={item.nickname}
                  correctSrc={correctSrc}
                  item={item}
                />
              );
            })}
          </>
        ) : (
          <ReviewsList.ItemContainer>
            <ReviewsList.NoReviews />
          </ReviewsList.ItemContainer>
        )}
        {fullReviewsArray && (
          <AuxillaryPaginationContainer
            reviewsLength={fullReviewsArray.length}
          />
        )}
        <DetailsPanel.LinkButton onClick={reviewRedirectPage}>
          Create own review
        </DetailsPanel.LinkButton>
      </ReviewsList>

      {errorModalVisible && (
        <ErrorModalContainer
          errorMessage={errorMessage}
          closeModal={hideErrorModal}
          errorModalVisible={errorModalVisible}
        />
      )}
    </DetailsPanel>
  ) : null;
}
