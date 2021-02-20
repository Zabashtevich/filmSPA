import React from "react";

import { UtilityModal } from "./../../../components";

export function UtilityHeader() {
  return (
    <>
      <UtilityModal.Title>ENTER A NAME</UtilityModal.Title>
      <UtilityModal.UtilityIcon />
    </>
  );
}

export function UtilityInput({ setname, name }) {
  return (
    <UtilityModal.Input
      value={name}
      onChange={(e) => setname(e.target.value)}
      placeholder={"Enter a name"}
    />
  );
}

export function UtilityButtons({
  type,
  name,
  setname,
  closeModal,
  confirmModal,
}) {
  return (
    <>
      <UtilityModal.DeclineButton onClick={closeModal}>
        CANCEL
      </UtilityModal.DeclineButton>
      <UtilityModal.AcceptButton
        disabled={name.length < 3 && 1}
        type={type}
        onClick={() => {
          setname("");
          confirmModal(name);
        }}
      >
        ACCEPT
      </UtilityModal.AcceptButton>
    </>
  );
}
