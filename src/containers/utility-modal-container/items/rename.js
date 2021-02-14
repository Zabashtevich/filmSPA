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

export function RenameButtons({
  type,
  name,
  setName,
  closeModal,
  confirmModal,
}) {
  return (
    <>
      <UtilityModal.DeclineButton onClick={() => closeModal("rename")}>
        CANCEL
      </UtilityModal.DeclineButton>
      <UtilityModal.AcceptButton
        disabled={name.length < 3 && 1}
        type={type}
        onClick={() => {
          setName("");
          confirmModal("rename", { name });
        }}
      >
        ACCEPT
      </UtilityModal.AcceptButton>
    </>
  );
}
