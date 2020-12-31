import React from "react";
import { ErrorModal } from "../../components";

export default function ErrorModalContainer({ errorMessage, closeModal }) {
  return (
    <ErrorModal>
      <ErrorModal.Wrapper>
        <ErrorModal.CornerButton onClick={closeModal}>
          <ErrorModal.CloseIcon />
        </ErrorModal.CornerButton>
        <ErrorModal.CloseButton onClick={closeModal}>
          <ErrorModal.CloseIcon />
        </ErrorModal.CloseButton>
        <ErrorModal.Message>{errorMessage}</ErrorModal.Message>
      </ErrorModal.Wrapper>
    </ErrorModal>
  );
}
