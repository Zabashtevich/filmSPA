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

export function ConfirmButtons({ type, closeModal, hideRemoveModal }) {
  return (
    <>
      <UtilityModal.DeclineButton onClick={closeModal}>
        CANCEL
      </UtilityModal.DeclineButton>
      <UtilityModal.AcceptButton
        onClick={() => hideRemoveModal("confirm")}
        type={type}
      >
        ACCEPT
      </UtilityModal.AcceptButton>
    </>
  );
}
