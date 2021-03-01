import React from "react";

import { Modal } from "../../components";
import { useModalContext } from "../../context";

export default function ModalContainer() {
  const [{ visible, type, message }, { closeModal }] = useModalContext();

  return (
    <Modal visible={visible}>
      <Modal.Content>
        <Modal.Close />
        <Modal.Header type={type}>
          {type === "error" && <Modal.Title>ERROR</Modal.Title>}
          {type === "confirm" && <Modal.Title>CONFIRM</Modal.Title>}
          <Modal.Icon />
        </Modal.Header>
        <Modal.Wrapper>
          <Modal.Message>{message}</Modal.Message>
          <Modal.Inner>
            {type === "confirm" && (
              <Modal.Button onClick={closeModal}>CANCEL</Modal.Button>
            )}
            {type === "confirm" && (
              <Modal.Button type={type}>CONFIRM</Modal.Button>
            )}
            {type === "error" && (
              <Modal.Button type={type} onClick={closeModal}>
                OK
              </Modal.Button>
            )}
          </Modal.Inner>
        </Modal.Wrapper>
      </Modal.Content>
    </Modal>
  );
}
