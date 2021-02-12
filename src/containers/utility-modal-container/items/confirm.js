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

export function ConfirmButtons({ closeModal, confirmModal, type }) {
  return (
    <>
      <UtilityModal.DeclineButton onClick={closeModal}>
        CANCEL
      </UtilityModal.DeclineButton>
      <UtilityModal.ConfirmButton onClick={confirmModal} type={type}>
        ACCEPT
      </UtilityModal.ConfirmButton>
    </>
  );
}
