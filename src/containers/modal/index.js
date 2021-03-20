import React from "react";
import { createPortal } from "react-dom";

import { Modal } from "../../components";
import { useModalContext } from "./../../context";

export default function ModalContainer() {
  const [
    { visible, type, message },
    { closeModal, confirmModal },
  ] = useModalContext();

  return (
    visible &&
    createPortal(
      <Modal visible={visible} onClick={closeModal}>
        <Modal.Close />
        <Modal.Container>
          <Modal.Header type={type}>
            <Modal.Title>{type.toUpperCase()}</Modal.Title>
            {type === "error" && <Modal.Error />}
            {type === "confirm" && <Modal.Confirm />}
          </Modal.Header>
          <Modal.Message>{message}</Modal.Message>
          {type === "error" && (
            <Modal.Wrapper>
              <Modal.Accept type={type}>OK</Modal.Accept>
            </Modal.Wrapper>
          )}
          {type === "confirm" && (
            <Modal.Wrapper>
              <Modal.Decline>Cancel</Modal.Decline>
              <Modal.Accept onClick={confirmModal} type={type}>
                Accept
              </Modal.Accept>
            </Modal.Wrapper>
          )}
        </Modal.Container>
      </Modal>,
      document.getElementById("root"),
    )
  );
}
