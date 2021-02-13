import React from "react";
import { UtilityModal } from "../../../components";

export function NewlistHeader() {
  return (
    <>
      <UtilityModal.Title>NEW LIST</UtilityModal.Title>
      <UtilityModal.Newlist />
    </>
  );
}

export function NewlistInput({ setName, name }) {
  return (
    <UtilityModal.Input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder={"Enter a new name"}
    />
  );
}

export function NewlistButtons({ type, name, closeModal, confirmModal }) {
  return (
    <>
      <UtilityModal.DeclineButton onClick={() => closeModal("newlist")}>
        CANCEL
      </UtilityModal.DeclineButton>
      <UtilityModal.AcceptButton
        disabled={name.length < 3 && 1}
        type={type}
        onClick={() => confirmModal("newlist", { name })}
      >
        ACCEPT
      </UtilityModal.AcceptButton>
    </>
  );
}
