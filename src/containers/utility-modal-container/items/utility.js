import React from "react";

import { UtilityModal } from "./../../../components";

export function UtilityHeader({ children }) {
  return (
    <>
      <UtilityModal.Title>{children}</UtilityModal.Title>
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
  acceptModal,
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
          acceptModal(name);
        }}
      >
        ACCEPT
      </UtilityModal.AcceptButton>
    </>
  );
}
