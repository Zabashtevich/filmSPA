import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";

import useFirestore from "../../hooks/useFirestore";
import useAuthListener from "../../hooks/useAuthListener";

import { ReviewPost } from "../../components";
import { ErrorModalContainer } from "../";
import { postReviewLogic } from "../../utils/firebase";
import { useAuthContext } from "../../context";

export default function ReviewPostContainer() {
  const [visibleDropdown, setVisibleDropdown] = useState(false);
  const [ratingValue, setRatingValue] = useState("");
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [pushingReview, setPushingReview] = useState(false);

  const history = useHistory();
  const slug = useParams();

  const firebase = useAuthContext();
  const { user } = useAuthListener();

  const [reviewLoading, reviewData] = useFirestore(`Reviews`, slug.slug);
  const [, userData] = useFirestore(user.displayName, "reviews");

  const onIconClick = () => {
    setVisibleDropdown((prev) => !prev);
  };

  const onPostReview = ({ title, rating, textfield }) => {
    postReviewLogic(
      user,
      setErrorMessage,
      setErrorModalVisible,
      history,
      firebase,
      userData,
      slug.slug,
      textfield,
      rating,
      title,
      reviewData,
      setPushingReview,
    );
  };

  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setErrorMessage(Object.keys(errors).map((item) => errors[item].message));
      setErrorModalVisible(true);
      document.body.style.overflow = "hidden";
    }
  }, [errors]);

  const hideErrorModal = () => {
    document.body.style.overflow = "auto";
    setErrorMessage(null);
    setErrorModalVisible(false);
  };
  return (
    <ReviewPost>
      {errorModalVisible && (
        <ErrorModalContainer
          errorMessage={errorMessage}
          closeModal={hideErrorModal}
          errorModalVisible={errorModalVisible}
        />
      )}
      <ReviewPost.Form onSubmit={handleSubmit(onPostReview)}>
        <ReviewPost.Title>Create your review</ReviewPost.Title>
        {user && (
          <ReviewPost.ProfileWrapper>
            <ReviewPost.Avatar
              src={user.photoURL || "./../../../assets/images/poster.png"}
            />
            <ReviewPost.Nickname>{user.displayName}</ReviewPost.Nickname>
          </ReviewPost.ProfileWrapper>
        )}
        <ReviewPost.Input
          placeholder={"Title"}
          name="title"
          inputRef={register({
            required: {
              value: true,
              message: "Title field can not be empty",
            },
          })}
        />
        <ReviewPost.RadioWrapper onClick={onIconClick}>
          <ReviewPost.RadioTitle
            placeholder="Rate score"
            name="rating"
            readOnly
            value={ratingValue}
            onChange={() => null}
            radioRef={register({
              required: { value: true, message: "Choose rate score" },
            })}
          />
          <ReviewPost.Icon rotate={visibleDropdown ? "180deg" : "0"} />
          {visibleDropdown && (
            <CSSTransition timeout={150} appear={true} in={visibleDropdown}>
              {(state) => (
                <ReviewPost.RadioElementsContainer state={state}>
                  {Array(10)
                    .fill("_")
                    .map((_, i) => {
                      return (
                        <ReviewPost.RadioInner key={i + 1}>
                          <ReviewPost.RadioElement
                            type="radio"
                            name="radioValue"
                            value={i + 1}
                            htmlFor={i + 1}
                            id={i + 1}
                            onClick={() => {
                              setRatingValue(i + 1);
                            }}
                          />
                          <ReviewPost.RadioLabel
                            htmlFor={i + 1}
                            onClick={() => setRatingValue(i + 1)}
                          >
                            {i + 1}
                          </ReviewPost.RadioLabel>
                        </ReviewPost.RadioInner>
                      );
                    })}
                </ReviewPost.RadioElementsContainer>
              )}
            </CSSTransition>
          )}
        </ReviewPost.RadioWrapper>
        <ReviewPost.Textfield
          name="textfield"
          textfieldRef={register({
            required: {
              value: true,
              message: "You dont write anything in your review",
            },
            minLength: {
              value: 100,
              message: "Your review must be at least 100 characters long",
            },
            maxLength: {
              value: 4000,
              message: "Your review must contain a maximum of 2000 characters",
            },
          })}
        />
        <ReviewPost.ButtonsWrapper>
          <ReviewPost.BackLink to={`../${slug.slug}`}>
            <ReviewPost.IconLeft /> GO BACK
          </ReviewPost.BackLink>
          <ReviewPost.Button
            type="submit"
            disabled={reviewLoading || pushingReview}
          >
            PUBLIC
          </ReviewPost.Button>
        </ReviewPost.ButtonsWrapper>
      </ReviewPost.Form>
    </ReviewPost>
  );
}
