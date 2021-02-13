import React from "react";

import { UtilityModal } from "../../../components";

export function ErrorHeader() {
  return (
    <>
      <UtilityModal.Title>ERROR</UtilityModal.Title>
      <UtilityModal.ErrorIcon />
    </>
  );
}

export function ErrorButtons({ type, closeModal }) {
  return (
    <UtilityModal.AcceptButton onClick={closeModal} type={type}>
      OK
    </UtilityModal.AcceptButton>
  );
}
