import React from "react";

import EditModal from "../../../../components/edit-modal";

export default function EditModalContainer({ text, visible }) {
  return (
    <EditModal>
      <EditModal.Container visible={visible}>
        <EditModal.Title>{text}</EditModal.Title>
        <EditModal.Wrapper>
          <EditModal.Cancel />
          <EditModal.Confirm />
        </EditModal.Wrapper>
      </EditModal.Container>
    </EditModal>
  );
}
