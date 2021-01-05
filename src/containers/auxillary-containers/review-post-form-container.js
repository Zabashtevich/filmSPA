import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { ReviewPostForm } from "../../components";

export default function ReviewPostFormContainer({ user }) {
  const [visibleDropdown, setVisibleDropdown] = useState(false);
  const onIconClick = () => {
    setVisibleDropdown((prev) => !prev);
  };
  return (
    <ReviewPostForm>
      <ReviewPostForm.Title>Create your review</ReviewPostForm.Title>
      <ReviewPostForm.Wrapper>
        <ReviewPostForm.Nickname>
          {user && user.displayName}
        </ReviewPostForm.Nickname>
      </ReviewPostForm.Wrapper>
      <ReviewPostForm.Input placeholder={"Title"} />
      <ReviewPostForm.RadioWrapper onClick={onIconClick}>
        <ReviewPostForm.RadioTitle>Rate score</ReviewPostForm.RadioTitle>
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
                          name={`${_}`}
                          value={i + 1}
                          htmlFor={i + 1}
                          id={i + 1}
                        />
                        <ReviewPostForm.RadioLabel htmlFor={i + 1}>
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
      <ReviewPostForm.Textfield />
      <ReviewPostForm.Button>PUBLIC</ReviewPostForm.Button>
    </ReviewPostForm>
  );
}
