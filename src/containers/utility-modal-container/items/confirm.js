import React from "react";

import { UtilityModal } from "./../../../components";

export function ConfirmHeader({ children }) {
  return (
    <>
      <UtilityModal.Title>{children}</UtilityModal.Title>
      <UtilityModal.WarningIcon />
    </>
  );
}

export function ConfirmButtons({ type, closeModal, acceptModal }) {
  return (
    <>
      <UtilityModal.DeclineButton onClick={closeModal}>
        CANCEL
      </UtilityModal.DeclineButton>
      <UtilityModal.AcceptButton onClick={acceptModal} type={type}>
        ACCEPT
      </UtilityModal.AcceptButton>
    </>
  );
}
