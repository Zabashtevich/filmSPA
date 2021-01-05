import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useForm } from "react-hook-form";

import { ReviewPostForm } from "../../components";

export default function ReviewPostFormContainer({ user }) {
  const [visibleDropdown, setVisibleDropdown] = useState(false);
  const [ratingValue, setRatingValue] = useState("");

  const onIconClick = () => {
    setVisibleDropdown((prev) => !prev);
  };

  const handleReviewPost = (data) => {
    console.log(data);
  };

  const { register, handleSubmit, errors } = useForm();

  console.log(errors);
  return (
    <ReviewPostForm>
      <ReviewPostForm.Form onSubmit={handleSubmit(handleReviewPost)}>
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
              message: "title field can not be empty",
            },
          })}
        />
        <ReviewPostForm.RadioWrapper onClick={onIconClick}>
          <ReviewPostForm.RadioTitle
            placeholder="Rate score"
            name="rating"
            disabled
            value={ratingValue}
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
                            onClick={() => setRatingValue(i + 1)}
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
              message: "You dont write anything",
            },
            minLength: {
              value: 100,
              message: "Your review must be at least 100 characters long",
            },
            maxLength: {
              value: 2000,
              message: "Your review must contain a maximum of 2000 characters",
            },
          })}
        />
        <ReviewPostForm.Button type="submit">PUBLIC</ReviewPostForm.Button>
      </ReviewPostForm.Form>
    </ReviewPostForm>
  );
}
