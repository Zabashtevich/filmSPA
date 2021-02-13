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

export function ErrorButtons({ closeModal, type }) {
  return (
    <UtilityModal.AcceptButtons onClick={closeModal} type={type}>
      OK
    </UtilityModal.AcceptButtons>
  );
}