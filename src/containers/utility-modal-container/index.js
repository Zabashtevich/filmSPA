import React, { useState } from "react";

import { UtilityModal } from "../../components";
import { useModalContext } from "../../context";
import { ErrorButtons, ErrorHeader } from "./items/error";
import { NewlistButtons, NewlistHeader, NewlistInput } from "./items/newlist";
import { RenameButtons, RenameHeader, RenameInput } from "./items/rename";
import { ConfirmButtons, ConfirmHeader } from "./items/confirm";
import { DeleteButtons, DeleteHeader } from "./items/delete";

export default function UtilityModalContainer() {
  // const [modalstate, modalinterface] = useModalContext();

  // const { type, message, visible } = modalstate;
  // const { closeModal, confirmModal } = modalinterface;
  const [name, setName] = useState("");

  return (
    <UtilityModal visible={visible}>
      <UtilityModal.Container>
        {/* <UtilityModal.Header type={type}>
          {type === "error" && <ErrorHeader />}
          {type === "rename" && <RenameHeader />}
          {type === "newlist" && <NewlistHeader />}
          {type === "remove" && <DeleteHeader />}
          {type === "confirm" && <ConfirmHeader />}
          <UtilityModal.Close onClick={closeModal} />
        </UtilityModal.Header> */}
        <UtilityModal.Body>
          {/* <UtilityModal.Message>{message}</UtilityModal.Message>
          {type === "rename" && <RenameInput setName={setName} name={name} />}
          {type === "newlist" && <NewlistInput setName={setName} name={name} />}
          <UtilityModal.Wrapper>
            {type === "error" && (
              <ErrorButtons type={type} closeModal={closeModal} />
            )}
            {type === "rename" && (
              <RenameButtons
                type={type}
                name={name}
                setName={setName}
                closeModal={closeModal}
                confirmModal={confirmModal}
              />
            )}
            {type === "newlist" && (
              <NewlistButtons
                type={type}
                name={name}
                setName={setName}
                closeModal={closeModal}
                confirmModal={confirmModal}
              />
            )}
            {type === "remove" && (
              <DeleteButtons
                type={type}
                closeModal={closeModal}
                confirmModal={confirmModal}
              />
            )}
            {type === "confirm" && (
              <ConfirmButtons
                type={type}
                closeModal={closeModal}
                confirmModal={confirmModal}
              />
            )}
          </UtilityModal.Wrapper> */}
        </UtilityModal.Body>
      </UtilityModal.Container>
    </UtilityModal>
  );
}
