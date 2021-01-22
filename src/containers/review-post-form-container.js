import React, { useEffect, useState, useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";

import useFirestore from "../hooks/useFirestore";
import useAuthListener from "../hooks/useAuthListener";

import { ReviewPostForm } from "../components";
import { ErrorModalContainer } from "./auxillary/auxillary-containers";
import { postReviewLogic } from "../utils/firebase";
import { AuthContext } from "../context/auth-context";

export default function ReviewPostFormContainer() {
  const [visibleDropdown, setVisibleDropdown] = useState(false);
  const [ratingValue, setRatingValue] = useState("");
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [pushingReview, setPushingReview] = useState(false);

  const history = useHistory();
  const slug = useParams();

  const { firebase } = useContext(AuthContext);
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
        {user && (
          <ReviewPostForm.ProfileWrapper>
            <ReviewPostForm.Avatar
              src={user.photoURL || "./../../../assets/images/poster.png"}
            />
            <ReviewPostForm.Nickname>
              {user.displayName}
            </ReviewPostForm.Nickname>
          </ReviewPostForm.ProfileWrapper>
        )}
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
        <ReviewPostForm.ButtonsWrapper>
          <ReviewPostForm.BackLink to={`../${slug.slug}`}>
            <ReviewPostForm.IconLeft /> GO BACK
          </ReviewPostForm.BackLink>
          <ReviewPostForm.Button
            type="submit"
            disabled={reviewLoading || pushingReview}
          >
            PUBLIC
          </ReviewPostForm.Button>
        </ReviewPostForm.ButtonsWrapper>
      </ReviewPostForm.Form>
    </ReviewPostForm>
  );
}
