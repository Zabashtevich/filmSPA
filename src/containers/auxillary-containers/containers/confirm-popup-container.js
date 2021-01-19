import React from "react";
import { CSSTransition } from "react-transition-group";

import ConfirmPopup from "../../../components";

export default function ConfirmPopupContainer({
  popupConfirmVisible,
  message,
}) {
  return (
    <CSSTransition
      in={popupConfirmVisible}
      classNames="fade"
      timeout={600}
      appear={true}
    >
      <ConfirmPopup>
        <ConfirmPopup.Container>
          <ConfirmPopup.ContainerBackground />
          <ConfirmPopup.Wrapper>
            <ConfirmPopup.Title>CONFIRM</ConfirmPopup.Title>
          </ConfirmPopup.Wrapper>
          <ConfirmPopup.Wrapper>
            <ConfirmPopup.Message>{message}</ConfirmPopup.Message>
          </ConfirmPopup.Wrapper>
          <ConfirmPopup.Wrapper>
            <ConfirmPopup.Button>CANCEL</ConfirmPopup.Button>
            <ConfirmPopup.Button>CONFIRM</ConfirmPopup.Button>
          </ConfirmPopup.Wrapper>
        </ConfirmPopup.Container>
      </ConfirmPopup>
    </CSSTransition>
  );
}
