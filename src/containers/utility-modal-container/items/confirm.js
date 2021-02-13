import React from "react";

import { UtilityModal } from "../../../components";

export function ConfirmHeader() {
  return (
    <>
      <UtilityModal.Title>CONFIRM</UtilityModal.Title>
      <UtilityModal.WarningIcon />
    </>
  );
}

export function ConfirmButtons({ type, closeModal, confirmModal }) {
  return (
    <>
      <UtilityModal.DeclineButton onClick={() => closeModal("confirm")}>
        CANCEL
      </UtilityModal.DeclineButton>
      <UtilityModal.AcceptButton
        onClick={() => confirmModal("confirm")}
        type={type}
      >
        ACCEPT
      </UtilityModal.AcceptButton>
    </>
  );
}
