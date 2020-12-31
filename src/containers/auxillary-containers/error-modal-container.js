import React from "react";
import { ErrorModal } from "../../components";

export default function ErrorModalContainer() {
  return (
    <ErrorModal>
      <ErrorModal.Wrapper>
        <ErrorModal.Button>
          <ErrorModal.CloseIcon />
        </ErrorModal.Button>
      </ErrorModal.Wrapper>
    </ErrorModal>
  );
}
