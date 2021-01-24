import React, { useState } from "react";
import { AcclistCreateItem } from "../../../../components";
import ItemDescriptionPopupContainer from "./item-description-popup-container";

export default function AccountCreateList() {
  const [createDesc, setCreateDesc] = useState(false);
  const [creatingList, setCreatingList] = useState(false);
  const [confirmDesc, setConfirmDesc] = useState(false);
  const [delcineDesc, setDeclineDesc] = useState(false);

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
      <AcclistCreateItem.CreateTitle visible={creatingList}>
        Enter name
      </AcclistCreateItem.CreateTitle>
      <AcclistCreateItem.Input visible={creatingList} />
      <AcclistCreateItem.Wrapper visible={creatingList}>
        <AcclistCreateItem.Confirm
          onMouseEnter={() => setConfirmDesc(true)}
          onMouseLeave={() => setConfirmDesc(false)}
        />
        <AcclistCreateItem.Abort
          onMouseEnter={() => setDeclineDesc(true)}
          onMouseLeave={() => setDeclineDesc(false)}
        />
        <ItemDescriptionPopupContainer
          text={"Confirm"}
          visible={confirmDesc}
          backgroundsecondary={1}
        />
        <ItemDescriptionPopupContainer
          text={"Decline"}
          visible={delcineDesc}
          backgroundsecondary={1}
        />
      </AcclistCreateItem.Wrapper>
    </AcclistCreateItem>
  );
}
