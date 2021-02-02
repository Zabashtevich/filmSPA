import React, { useState } from "react";

import { EditModal } from "../../../../components";

export default function EditModalList({ closeModal }) {
  const [listInputValue, setListInputValue] = useState("");
  return (
    <>
      <EditModal.Wrapper>
        <EditModal.Input
          value={listInputValue}
          onChange={(e) => setListInputValue(e.target.value)}
        />
      </EditModal.Wrapper>
      <EditModal.Wrapper buttons={1}>
        <EditModal.Cancel
          onClick={() => closeModal({ target: "edit", value: false })}
        />
        <EditModal.Confirm
          disabled={listInputValue.length < 4 || listInputValue.length > 20}
          onClick={() => closeModal({ target: "edit", value: listInputValue })}
        />
      </EditModal.Wrapper>
    </>
  );
}