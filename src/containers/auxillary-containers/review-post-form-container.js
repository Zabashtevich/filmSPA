import React from "react";
import { ReviewPostForm } from "../../components";

export default function ReviewPostFormContainer({ user }) {
  return (
    <ReviewPostForm>
      <ReviewPostForm.Title>Create your review</ReviewPostForm.Title>
      <ReviewPostForm.Wrapper>
        <ReviewPostForm.Nickname>
          {user && user.displayName}
        </ReviewPostForm.Nickname>
      </ReviewPostForm.Wrapper>
      <ReviewPostForm.Input placeholder={"Title"} />
      <ReviewPostForm.RadioWrapper>
        <ReviewPostForm.RadioTitle>Rate score</ReviewPostForm.RadioTitle>
        <ReviewPostForm.Icon />
        <ReviewPostForm.RadioElementsContainer>
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
      </ReviewPostForm.RadioWrapper>
      <ReviewPostForm.Textfield />
      <ReviewPostForm.Button>PUBLIC</ReviewPostForm.Button>
    </ReviewPostForm>
  );
}
