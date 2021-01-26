import React from "react";

import EditModal from "../../../../components/edit-modal";
import { EditModalList } from "../../auxillary-items";

export default function EditModalContainer({ text, visible }) {
  return (
    <EditModal>
      <EditModal.Container visible={visible}>
        <EditModal.Title>{text}</EditModal.Title>
        <EditModal.Warning>
          Name must contain between 4 and 20 characters
        </EditModal.Warning>
        <EditModalList />
      </EditModal.Container>
    </EditModal>
  );
}
