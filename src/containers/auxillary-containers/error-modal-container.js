import React from "react";
import { ErrorModal } from "../../components";

export default function ErrorModalContainer({
  errorMessage,
  setErrorModalVisible,
}) {
  return (
    <ErrorModal>
      <ErrorModal.Wrapper>
        <ErrorModal.Button onClick={() => setErrorModalVisible(false)}>
          <ErrorModal.CloseIcon />
        </ErrorModal.Button>
        <ErrorModal.Button onClick={() => setErrorModalVisible(false)}>
          <ErrorModal.CloseIcon />
        </ErrorModal.Button>
        <ErrorModal.Message>{errorMessage}</ErrorModal.Message>
      </ErrorModal.Wrapper>
    </ErrorModal>
  );
}
