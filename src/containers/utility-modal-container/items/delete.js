import React from "react";

import { UtilityModal } from "../../../components";

export function DeleteHeader() {
  return (
    <>
      <UtilityModal.Title>DELETE</UtilityModal.Title>
      <UtilityModal.WarningIcon />
    </>
  );
}

export function DeleteButtons({ type, closeModal, confirmModal }) {
  return (
    <>
      <UtilityModal.DeclineButton onClick={() => closeModal("confirm")}>
        CANCEL
      </UtilityModal.DeclineButton>
      <UtilityModal.AcceptButton
        onClick={() => confirmModal("delete")}
        type={type}
      >
        ACCEPT
      </UtilityModal.AcceptButton>
    </>
  );
}
