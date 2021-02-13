import React, { useState } from "react";

import { DescriptionPopupContainer } from "../../..";
import { Userlist } from "../../../../components";

export default function UserlistCreatelist() {
  const [descriptionVisible, setDescriptionVisible] = useState({
    createList: false,
  });
  const { createList } = descriptionVisible;

  return (
    <Userlist>
      <Userlist.Create
        onMouseEnter={() =>
          setDescriptionVisible((prev) => ({ ...prev, createList: true }))
        }
        onMouseLeave={() =>
          setDescriptionVisible((prev) => ({
            ...prev,
            createList: false,
          }))
        }
      />
      <DescriptionPopupContainer
        backgroundsecondary={1}
        text={"Create new list"}
        visible={createList}
      />
    </Userlist>
  );
}
