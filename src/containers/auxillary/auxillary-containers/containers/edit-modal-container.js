import React from "react";

import EditModal from "../../../../components/edit-modal";
import { EditModalList } from "../../auxillary-items";

export default function EditModalContainer({ text, visible }) {
  return (
    <EditModal>
      <EditModal.Container visible={visible}>
        <EditModal.Title>{text}</EditModal.Title>
        <EditModalList />
        <EditModal.Wrapper buttons={1}>
          <EditModal.Cancel />
          <EditModal.Confirm />
        </EditModal.Wrapper>
      </EditModal.Container>
    </EditModal>
  );
}
