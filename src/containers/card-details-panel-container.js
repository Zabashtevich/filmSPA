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
import { getCorrectReviewsArray, getCorrectSrc } from "../utils/utils";
import ErrorModalContainer from "./auxillary-containers/error-modal-container";
import RelevantListContainer from "./auxillary-containers/relevant-list-container";
import ReviewPostFormContainer from "./auxillary-containers/review-post-form-container";

export default function CardDetailsPanelContainer() {
  const [starValue, setStarValue] = useState(0);
  const [ratedValue, setRatedValue] = useState(0);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [reviewData, setReviewData] = useState(null);
  const [userData, setUserData] = useState(null);

  const location = useParams();
  const history = useHistory();

  const { list, loading } = useFetch(location.direction, location.slug, [
    {
      append_to_response:
        "credits,recommendations,images,videos,reviews,account_states",
    },
  ]);

  const { firebase } = useContext(AuthContext);

  const { user } = useAuthListener();

  const [userLoading] = useFirestore(
    user && `${user.displayName}`,
    `moviesrated`,
    setUserData,
  );
  const [reviewLoading] = useFirestore("Reviews", location.slug, setReviewData);

  useEffect(() => {
    if (userData && userData.length > 0 && list) {
      const rate = userData.find((item) => item.id === list.id);
      if (rate) setRatedValue(rate.value);
    }
  }, [userData, list]);

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
      const newuserData = [...userData, { id: itemID, value: rateScore }];
      firebase
        .firestore()
        .collection(`${user.displayName}`)
        .doc(`moviesrated`)
        .update({ list: newuserData })
        .catch((error) => showErrorModal(error));
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
        <ReviewsList.Title>Reviews</ReviewsList.Title>
        {!reviewLoading && list.reviews.results.length !== 0 ? (
          <>
            {getCorrectReviewsArray(list.reviews.results)
              .concat(reviewData)
              .map((item) => {
                const correctSrc =
                  item.avatar === null || item.avatar.includes("https")
                    ? getCorrectSrc(item.avatar)
                    : item.avatar;

                return (
                  <ReviewsList.ItemContainer key={item.nickname}>
                    <ReviewsList.Author>
                      <ReviewsList.Avatar
                        src={correctSrc.changed ? null : correctSrc}
                        correctSrc={correctSrc.changed ? correctSrc.src : null}
                      />
                      <ReviewsList.Score>{item.rating}</ReviewsList.Score>
                      <ReviewsList.Wrapper>
                        <ReviewsList.Nickname>
                          {item.nickname}
                        </ReviewsList.Nickname>
                        <ReviewsList.Date>
                          {new Date(item.date).toDateString()}
                        </ReviewsList.Date>
                      </ReviewsList.Wrapper>
                    </ReviewsList.Author>
                    <ReviewsList.Content>{item.text}</ReviewsList.Content>
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

      {errorModalVisible && (
        <ErrorModalContainer
          errorMessage={errorMessage}
          closeModal={hideErrorModal}
          errorModalVisible={errorModalVisible}
        />
      )}
      <ReviewPostFormContainer user={user} firebase={firebase} id={list.id} />
    </DetailsPanel>
  ) : null;
}
