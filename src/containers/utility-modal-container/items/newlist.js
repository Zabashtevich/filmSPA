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

export function NewlistButtons({ closeModal, createList, name, type }) {
  return (
    <>
      <UtilityModal.DeclineButton onClick={closeModal}>
        CANCEL
      </UtilityModal.DeclineButton>
      <UtilityModal.AcceptButton
        onClick={() => createList(name)}
        disabled={name.length < 3 && 1}
        type={type}
      >
        ACCEPT
      </UtilityModal.AcceptButton>
    </>
  );
}