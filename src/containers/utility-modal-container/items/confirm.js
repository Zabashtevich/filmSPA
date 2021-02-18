import Reacr from "react";

import { UtilityModal } from "./../../../components";

export function ConfirmHeader({ children }) {
  return (
    <>
      <UtilityModal.Title>{children}</UtilityModal.Title>
      <UtilityModal.WarningIcon />
    </>
  );
}

export function name({ type, hideModal, acceptModal }) {
  return (
    <>
      <UtilityModal.DeclineButton onClick={hideModal}>
        CANCEL
      </UtilityModal.DeclineButton>
      <UtilityModal.AcceptButton onClick={acceptModal} type={type}>
        ACCEPT
      </UtilityModal.AcceptButton>
    </>
  );
}
