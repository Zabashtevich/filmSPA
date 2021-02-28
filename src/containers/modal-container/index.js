import React from "react";

import { Modal } from "../../components";
import { useModalContext } from "../../context";

export default function ModalContainer() {
  const [{ visible }] = useModalContext();
  const type = "confirm";
  const message = "hahaha";
  return (
    <Modal visible={true}>
      <Modal.Content>
        <Modal.Close />
        <Modal.Header type={type}>
          {type === "error" && <Modal.Title>ERROR</Modal.Title>}
          {type === "confirm" && <Modal.Title>CONFIRM</Modal.Title>}
        </Modal.Header>
        <Modal.Wrapper>
          <Modal.Message>{message}</Modal.Message>
          <Modal.Inner>
            {type === "confirm" && <Modal.Button>CANCEL</Modal.Button>}
            {type === "confirm" && (
              <Modal.Button type={type}>CONFIRM</Modal.Button>
            )}
            {type === "error" && <Modal.Button type={type}>OK</Modal.Button>}
          </Modal.Inner>
        </Modal.Wrapper>
      </Modal.Content>
    </Modal>
  );
}
