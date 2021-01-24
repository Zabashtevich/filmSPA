import React, { useState } from "react";
import { AcclistCreateItem } from "../../../../components";
import ItemDescriptionPopupContainer from "./item-description-popup-container";

export default function AccountCreateList() {
  const [createDesc, setCreateDesc] = useState(false);
  const [creatingList, setCreatingList] = useState(false);
  return (
    <AcclistCreateItem>
      <AcclistCreateItem.CreateIcon
        onMouseEnter={() => setCreateDesc(true)}
        onMouseLeave={() => setCreateDesc(false)}
        onClick={() => setCreatingList(true)}
        visible={creatingList}
      />
      <ItemDescriptionPopupContainer
        text={"Create list"}
        visible={createDesc}
        backgroundsecondary={1}
      />
      <AcclistCreateItem.Input visible={creatingList} />
      <AcclistCreateItem.Wrapper visible={creatingList}>
        <AcclistCreateItem.Confirm />
        <AcclistCreateItem.Abort />
      </AcclistCreateItem.Wrapper>
    </AcclistCreateItem>
  );
}
