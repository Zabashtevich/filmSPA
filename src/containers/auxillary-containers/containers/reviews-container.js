import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import { LoadMore, ReviewsList } from "../../../components";
import { getCorrectSrc } from "./../../../utils/utils";

export default function ReviewsContainer({
  fullReviewsArray,
  user,
  setErrorMessage,
  setErrorModalVisible,
  reviewData,
}) {
  const location = useParams();
  const history = useHistory();

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

  return (
    <ReviewsList>
      {fullReviewsArray !== 0 ? (
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
            return <ReviewItemContainer item={item} correctSrc={correctSrc} />;
          })}
        </>
      ) : (
        <ReviewsList.ItemContainer>
          <ReviewsList.NoReviews />
        </ReviewsList.ItemContainer>
      )}

      <ReviewsList.LinkButton onClick={reviewRedirectPage}>
        Create own review
      </ReviewsList.LinkButton>
    </ReviewsList>
  );
}

function ReviewItemContainer({ item, correctSrc }) {
  const [loadMoreVisible, setLoadMoreVisible] = useState(false);
  const [amountCharacters, setAmountCharacters] = useState(800);

  useEffect(() => {
    if (item.text.length > 800) {
      setLoadMoreVisible(true);
    }
  }, [item.text]);
  return (
    <ReviewsList.ItemContainer
      key={item.nickname}
      backgroundcolor={item.rating}
    >
      <ReviewsList.Author>
        <ReviewsList.Avatar
          src={correctSrc.changed ? null : correctSrc}
          correctSrc={correctSrc.changed ? correctSrc.src : null}
        />
        {item.rating && <ReviewsList.Score>{item.rating}</ReviewsList.Score>}
        <ReviewsList.Wrapper>
          <ReviewsList.Nickname>{item.nickname}</ReviewsList.Nickname>
          <ReviewsList.Date>
            {new Date(item.date).toDateString()}
          </ReviewsList.Date>
        </ReviewsList.Wrapper>
      </ReviewsList.Author>
      {!loadMoreVisible && (
        <ReviewsList.Content>{item.text}</ReviewsList.Content>
      )}
      {loadMoreVisible && (
        <ReviewsList.Content loadMoreVisible={loadMoreVisible}>
          {item.text.slice(0, amountCharacters)}
        </ReviewsList.Content>
      )}
      {loadMoreVisible && (
        <LoadMore>
          <LoadMore.Wrapper>
            <LoadMore.Button
              reviewpage
              onClick={() => {
                setAmountCharacters(item.text.length);
                setLoadMoreVisible(false);
              }}
            >
              Load more
            </LoadMore.Button>
          </LoadMore.Wrapper>
        </LoadMore>
      )}
    </ReviewsList.ItemContainer>
  );
}
