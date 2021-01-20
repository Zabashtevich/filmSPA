import React from "react";
import { CSSTransition } from "react-transition-group";

import { ConfirmPopup } from "../../../components";

export default function ConfirmPopupContainer({
  message,
  closeConfirmWindow,
  popupConfirmVisible,
}) {
  return (
    <ConfirmPopup>
      <CSSTransition
        classNames="fade"
        timeout={{ enter: 400, exit: 300 }}
        appear={true}
        in={popupConfirmVisible}
      >
        <ConfirmPopup.Container>
          <ConfirmPopup.Wrapper titlewrapper={1}>
            <ConfirmPopup.ContainerBackground />
            <ConfirmPopup.Title>CONFIRM</ConfirmPopup.Title>
          </ConfirmPopup.Wrapper>
          <ConfirmPopup.Wrapper messagewrapper={1}>
            <ConfirmPopup.Message>{message}</ConfirmPopup.Message>
          </ConfirmPopup.Wrapper>
          <ConfirmPopup.Wrapper buttonswrapper={1}>
            <ConfirmPopup.Button
              cancel={1}
              onClick={() => closeConfirmWindow(false)}
            >
              CANCEL
            </ConfirmPopup.Button>
            <ConfirmPopup.Button
              confirm={1}
              onClick={() => closeConfirmWindow(true)}
            >
              CONFIRM
            </ConfirmPopup.Button>
          </ConfirmPopup.Wrapper>
        </ConfirmPopup.Container>
      </CSSTransition>
    </ConfirmPopup>
  );
}
