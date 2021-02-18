import React from "react";

import { UtilityModal } from "./../../../components";

export function ErrorHeader({ children }) {
  return (
    <>
      <UtilityModal.Title>{children}</UtilityModal.Title>
      <UtilityModal.ErrorIcon />
    </>
  );
}

export function ErrorButtons({ type, hideModal }) {
  return (
    <UtilityModal.AcceptButton onClick={hideModal} type={type}>
      OK
    </UtilityModal.AcceptButton>
  );
}
