import React from "react";

import { Modal } from "../../components";

export default function ModalContainer() {
  return (
    <Modal>
      <Modal.Content>
        <Modal.Wrapper>
          <Modal.Title></Modal.Title>
        </Modal.Wrapper>
        <Modal.Wrapper>
          <Modal.Message></Modal.Message>
          <Modal.Button></Modal.Button>
          <Modal.Button></Modal.Button>
        </Modal.Wrapper>
      </Modal.Content>
    </Modal>
  );
}
