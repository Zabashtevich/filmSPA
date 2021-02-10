import React from "react";

import { UtilityModal } from "../../components";
import { useModalContext } from "../../context";

export default function UtilityModalContainer() {
  const [modalstate, modalinterface] = useModalContext();

  const { type, message, visible } = modalstate;
  const { closeModal, confirmModal } = modalinterface;

  return (
    <UtilityModal visible={visible}>
      <UtilityModal.Container visible={visible}>
        <UtilityModal.Header type={type}>
          {type === "error" && <UtilityModal.Title>ERROR</UtilityModal.Title>}
          {type === "error" && <UtilityModal.ErrorIcon />}
          {type === "warning" && (
            <UtilityModal.Title>WARNING</UtilityModal.Title>
          )}
          {type === "warning" && <UtilityModal.WarningIcon />}
          <UtilityModal.Close onClick={closeModal} />
        </UtilityModal.Header>
        <UtilityModal.Body>
          <UtilityModal.Message>{message}</UtilityModal.Message>
          <UtilityModal.Wrapper>
            {type === "warning" && (
              <UtilityModal.DeclineButton onClick={closeModal}>
                DECLINE
              </UtilityModal.DeclineButton>
            )}
            <UtilityModal.AcceptButton type={type} onClick={confirmModal}>
              ACCEPT
            </UtilityModal.AcceptButton>
          </UtilityModal.Wrapper>
        </UtilityModal.Body>
      </UtilityModal.Container>
    </UtilityModal>
  );
}
