import React from "react";

import { UtilityModal } from "../../../components";

export function RenameHeader() {
  return (
    <>
      <UtilityModal.Title>RENAME</UtilityModal.Title>
      <UtilityModal.WarningIcon />
    </>
  );
}

export function RenameInput({ setName, name }) {
  return (
    <UtilityModal.Input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder={"Enter a name"}
    />
  );
}

export function RenameButtons({ type, closeModal, renameModal, name }) {
  return (
    <>
      <UtilityModal.DeclineButton onClick={closeModal}>
        CANCEL
      </UtilityModal.DeclineButton>
      <UtilityModal.AcceptButton
        type={type}
        onClick={() => renameModal(name)}
        disabled={name.length < 3 && 1}
      >
        ACCEPT
      </UtilityModal.AcceptButton>
    </>
  );
}
