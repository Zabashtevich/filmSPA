import React from "react";

import { Modal } from "../../components";
import { useModalContext } from "../../context";

export default function ModalContainer() {
  const [{ message, visible, type }] = useModalContext();

  return (
    <Modal visible={true}>
      <Modal.Close />
      <Modal.Content>
        <Modal.Wrapper type={type}>
          {type === "error" && <Modal.Title>ERROR</Modal.Title>}
          {type === "confirm" && <Modal.Title>CONFIRM</Modal.Title>}
        </Modal.Wrapper>
        <Modal.Wrapper>
          <Modal.Message>{message}</Modal.Message>
          {type === "confirm" && <Modal.Button>CANCEL</Modal.Button>}
          {type === "confirm" && (
            <Modal.Button type={type}>CONFIRM</Modal.Button>
          )}
          {type === "error" && <Modal.Button type={type}>OK</Modal.Button>}
        </Modal.Wrapper>
      </Modal.Content>
    </Modal>
  );
}
