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
          {type === "newlist" && (
            <UtilityModal.Title>NEW LIST</UtilityModal.Title>
          )}
          {type === "newlist" && <UtilityModal.Newlist />}
          <UtilityModal.Close onClick={closeModal} />
        </UtilityModal.Header>
        <UtilityModal.Body>
          <UtilityModal.Message>{message}</UtilityModal.Message>
          {type === "rename" && (
            <UtilityModal.Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={"Enter a name"}
            />
          )}
          {type === "newlist" && (
            <UtilityModal.Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={"Enter a new name"}
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
            {type === "rename" && (
              <UtilityModal.RenameButton
                onClick={() => renameModal(name)}
                disabled={name.length < 3 && 1}
              >
                ACCEPT
              </UtilityModal.RenameButton>
            )}
            {type === "newlist" && (
              <UtilityModal.DeclineButton onClick={closeModal}>
                CANCEL
              </UtilityModal.DeclineButton>
            )}
            {type === "newlist" && (
              <UtilityModal.RenameButton
                onClick={() => renameModal(name)}
                disabled={name.length < 3 && 1}
              >
                ACCEPT
              </UtilityModal.RenameButton>
            )}
          </UtilityModal.Wrapper>
        </UtilityModal.Body>
      </UtilityModal.Container>
    </UtilityModal>
  );
}
