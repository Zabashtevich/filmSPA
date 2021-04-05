import React from "react";
import { createPortal } from "react-dom";

import { Modal } from "../../components";

export default function ModalContainer() {
  return createPortal(
    <Modal>
      <Modal.Overlay>
        <Modal.Close />
      </Modal.Overlay>
      <Modal.Window>
        <Modal.Header>
          <Modal.Icon />
        </Modal.Header>
        <Modal.Body>
          <Modal.Title>CONFIRM !</Modal.Title>
          <Modal.Message>You want to delete your list?</Modal.Message>

          {/* <Modal.List>
            <Modal.Item>Something gone wrong</Modal.Item>
          </Modal.List> */}
          <Modal.Wrapper>
            <Modal.Cancel>CANCEL</Modal.Cancel>
            <Modal.Confirm>CONFIRM</Modal.Confirm>
          </Modal.Wrapper>
        </Modal.Body>
      </Modal.Window>
    </Modal>,
    document.getElementById("root"),
  );
}
