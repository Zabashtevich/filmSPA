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
      <CSSTransition
        timeout={{ enter: 500, exit: 600 }}
        appear={true}
        in={errorModalVisible}
      >
        {(state) => (
          <ErrorModal.Inner state={state}>
            <ErrorModal.Wrapper>
              <ErrorModal.CornerButton
                onClick={() => closeModal({ target: "error", valueL: false })}
              >
                <ErrorModal.CloseIcon />
              </ErrorModal.CornerButton>
              <ErrorModal.TitleContainer>
                <ErrorModal.Title>ERROR</ErrorModal.Title>
              </ErrorModal.TitleContainer>
              <ErrorModal.MessageContainer>
                {errorMessage.map((item) => {
                  return (
                    <ErrorModal.Message key={item}>{item}</ErrorModal.Message>
                  );
                })}
              </ErrorModal.MessageContainer>
            </ErrorModal.Wrapper>
            <ErrorModal.CloseButton
              onClick={() => closeModal({ target: "error", valueL: false })}
            >
              CLOSE
            </ErrorModal.CloseButton>
          </ErrorModal.Inner>
        )}
      </CSSTransition>
    </ErrorModal>
  );
}
