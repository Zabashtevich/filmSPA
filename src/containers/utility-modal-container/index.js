import React, { useState } from "react";

import { UtilityModal } from "../../components";
import { useModalContext } from "../../context";

export default function UtilityModalContainer() {
  const [modalstate, modalinterface] = useModalContext();

  const { type, message, visible } = modalstate;
  const { closeModal, confirmModal, renameModal } = modalinterface;

  const [name, setName] = useState("");
  return (
    <UtilityModal visible={visible}>
      <UtilityModal.Container>
        <UtilityModal.Header type={type}>
          {type === "error" && <UtilityModal.Title>ERROR</UtilityModal.Title>}
          {type === "error" && <UtilityModal.ErrorIcon />}
          {type === "warning" && (
            <UtilityModal.Title>WARNING</UtilityModal.Title>
          )}
          {type === "warning" && <UtilityModal.WarningIcon />}
          {type === "rename" && <UtilityModal.Title>RENAME</UtilityModal.Title>}
          {type === "rename" && <UtilityModal.WarningIcon />}
          <UtilityModal.Close onClick={closeModal} />
        </UtilityModal.Header>
        <UtilityModal.Body>
          <UtilityModal.Message>{message}</UtilityModal.Message>
          {type === "rename" && (
            <UtilityModal.Input
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <UtilityModal.Wrapper>
            {type === "warning" && (
              <UtilityModal.DeclineButton onClick={closeModal}>
                CANCEL
              </UtilityModal.DeclineButton>
            )}
            {type === "rename" && (
              <UtilityModal.DeclineButton onClick={closeModal}>
                CANCEL
              </UtilityModal.DeclineButton>
            )}
            {type !== "rename" && (
              <UtilityModal.AcceptButton type={type} onClick={confirmModal}>
                ACCEPT
              </UtilityModal.AcceptButton>
            )}
            {type === "rename" && (
              <UtilityModal.AcceptButton
                type={type}
                onClick={() => renameModal(name)}
                disabled={name.length < 3 && 1}
              >
                ACCEPT
              </UtilityModal.AcceptButton>
            )}
          </UtilityModal.Wrapper>
        </UtilityModal.Body>
      </UtilityModal.Container>
    </UtilityModal>
  );
}
