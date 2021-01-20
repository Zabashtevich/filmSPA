import React from "react";
import { CSSTransition } from "react-transition-group";

import { ConfirmPopup } from "../../../components";

export default function ConfirmPopupContainer({ popupConfirmVisible }) {
  const message = "Do you want to delete list ?";
  return (
    <CSSTransition
      in={popupConfirmVisible}
      classNames="fade"
      timeout={600}
      appear={true}
    >
      <ConfirmPopup>
        <ConfirmPopup.Container>
          <ConfirmPopup.Wrapper titlewrapper={1}>
            <ConfirmPopup.ContainerBackground />
            <ConfirmPopup.Title>CONFIRM</ConfirmPopup.Title>
          </ConfirmPopup.Wrapper>
          <ConfirmPopup.Wrapper messagewrapper={1}>
            <ConfirmPopup.Message>{message}</ConfirmPopup.Message>
          </ConfirmPopup.Wrapper>
          <ConfirmPopup.Wrapper buttonswrapper={1}>
            <ConfirmPopup.Button cancel={1}>CANCEL</ConfirmPopup.Button>
            <ConfirmPopup.Button confirm={1}>CONFIRM</ConfirmPopup.Button>
          </ConfirmPopup.Wrapper>
        </ConfirmPopup.Container>
      </ConfirmPopup>
    </CSSTransition>
  );
}
