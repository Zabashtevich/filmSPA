import React from "react";
import { ErrorModal } from "../../components";
import { CSSTransition } from "react-transition-group";

export default function ErrorModalContainer({
  errorMessage,
  closeModal,
  errorModalVisible,
}) {
  return (
    <ErrorModal>
      <CSSTransition timeout={150} appear={true} in={errorModalVisible}>
        {(state) => (
          <ErrorModal.Inner state={state}>
            <ErrorModal.Wrapper>
              <ErrorModal.CornerButton onClick={closeModal}>
                <ErrorModal.CloseIcon />
              </ErrorModal.CornerButton>
              <ErrorModal.TitleContainer>
                <ErrorModal.Title>ERROR</ErrorModal.Title>
              </ErrorModal.TitleContainer>
              <ErrorModal.MessageContainer>
                <ErrorModal.Message>{errorMessage}</ErrorModal.Message>
              </ErrorModal.MessageContainer>
            </ErrorModal.Wrapper>
            <ErrorModal.CloseButton onClick={closeModal}>
              CLOSE
            </ErrorModal.CloseButton>
          </ErrorModal.Inner>
        )}
      </CSSTransition>
    </ErrorModal>
  );
}
