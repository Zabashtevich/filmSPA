import React from "react";
import { ErrorModal } from "../../components";

export default function ErrorModalContainer({ errorMessage, closeModal }) {
  return (
    <ErrorModal>
      <ErrorModal.Inner>
        <ErrorModal.Wrapper>
          <ErrorModal.CornerButton onClick={closeModal}>
            <ErrorModal.CloseIcon />
          </ErrorModal.CornerButton>
          <ErrorModal.CloseButton onClick={closeModal}>
            <ErrorModal.CloseIcon />
          </ErrorModal.CloseButton>
          <ErrorModal.TitleContainer>
            <ErrorModal.Title>ERROR</ErrorModal.Title>
          </ErrorModal.TitleContainer>
          <ErrorModal.MessageContainer>
            <ErrorModal.Message>{errorMessage}</ErrorModal.Message>
          </ErrorModal.MessageContainer>
        </ErrorModal.Wrapper>
      </ErrorModal.Inner>
    </ErrorModal>
  );
}
