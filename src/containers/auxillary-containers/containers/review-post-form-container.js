import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import useFirestore from "../../../hooks/useFirestore";

import { ReviewPostForm } from "../../../components";
import ErrorModalContainer from "./error-modal-container";
import { postReviewLogic } from "../../../utils/firebase";

export default function ReviewPostFormContainer({
  user,
  firebase,
  id,
  userData,
}) {
  const [visibleDropdown, setVisibleDropdown] = useState(false);
  const [ratingValue, setRatingValue] = useState("");
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const history = useHistory();

  const [reviewLoading, reviewData] = useFirestore(`Reviews`, id);

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
      id,
      textfield,
      rating,
      title,
      reviewData,
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
    <ReviewPostForm>
      {errorModalVisible && (
        <ErrorModalContainer
          errorMessage={errorMessage}
          closeModal={hideErrorModal}
          errorModalVisible={errorModalVisible}
        />
      )}
      <ReviewPostForm.Form onSubmit={handleSubmit(onPostReview)}>
        <ReviewPostForm.Title>Create your review</ReviewPostForm.Title>
        <ReviewPostForm.Wrapper>
          <ReviewPostForm.Nickname>
            {user && user.displayName}
          </ReviewPostForm.Nickname>
        </ReviewPostForm.Wrapper>
        <ReviewPostForm.Input
          placeholder={"Title"}
          name="title"
          inputRef={register({
            required: {
              value: true,
              message: "Title field can not be empty",
            },
          })}
        />
        <ReviewPostForm.RadioWrapper onClick={onIconClick}>
          <ReviewPostForm.RadioTitle
            placeholder="Rate score"
            name="rating"
            readOnly
            value={ratingValue}
            onChange={() => null}
            radioRef={register({
              required: { value: true, message: "Choose rate score" },
            })}
          />
          <ReviewPostForm.Icon rotate={visibleDropdown ? "180deg" : "0"} />
          {visibleDropdown && (
            <CSSTransition timeout={150} appear={true} in={visibleDropdown}>
              {(state) => (
                <ReviewPostForm.RadioElementsContainer state={state}>
                  {Array(10)
                    .fill("_")
                    .map((_, i) => {
                      return (
                        <ReviewPostForm.RadioInner key={i + 1}>
                          <ReviewPostForm.RadioElement
                            type="radio"
                            name="radioValue"
                            value={i + 1}
                            htmlFor={i + 1}
                            id={i + 1}
                            onClick={() => {
                              setRatingValue(i + 1);
                            }}
                          />
                          <ReviewPostForm.RadioLabel
                            htmlFor={i + 1}
                            onClick={() => setRatingValue(i + 1)}
                          >
                            {i + 1}
                          </ReviewPostForm.RadioLabel>
                        </ReviewPostForm.RadioInner>
                      );
                    })}
                </ReviewPostForm.RadioElementsContainer>
              )}
            </CSSTransition>
          )}
        </ReviewPostForm.RadioWrapper>
        <ReviewPostForm.Textfield
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
        <ReviewPostForm.Button type="submit" disabled={reviewLoading}>
          PUBLIC
        </ReviewPostForm.Button>
      </ReviewPostForm.Form>
    </ReviewPostForm>
  );
}
