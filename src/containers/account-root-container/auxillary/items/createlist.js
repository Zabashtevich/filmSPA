import React, { useState } from "react";

import { DescriptionPopupContainer } from "../../..";
import { Userlist } from "../../../../components";
import { useModalContext } from "../../../../context";

export default function UserlistCreatelist() {
  const [descriptionVisible, setDescriptionVisible] = useState({
    createList: false,
  });
  const { createList } = descriptionVisible;

  const [, modalinterface] = useModalContext();
  const { showModal } = modalinterface;

  return (
    <Userlist>
      <Userlist.Create
        onMouseEnter={() => setDescriptionVisible({ createList: true })}
        onMouseLeave={() =>
          setDescriptionVisible((prev) => ({
            ...prev,
            createList: false,
          }))
        }
        onClick={() => {
          setDescriptionVisible({ createList: false });
          showModal("newlist", "Enter list name");
        }}
      />
      <DescriptionPopupContainer
        backgroundsecondary={1}
        text={"Create new list"}
        visible={createList}
      />
    </Userlist>
  );
}
