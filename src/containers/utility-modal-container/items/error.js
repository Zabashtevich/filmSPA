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

export function ErrorButtons({ closeModal }) {
  return (
    <UtilityModal.ErrorButton onClick={closeModal}>OK</UtilityModal.ErrorButton>
  );
}
