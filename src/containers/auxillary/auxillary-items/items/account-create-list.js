import React, { useState } from "react";
import { AccountList } from "../../../../components";
import ItemDescriptionPopupContainer from "./item-description-popup-container";

export default function AccountCreateList() {
  const [createDesc, setCreateDesc] = useState(false);
  const [creatingList, setCreatingList] = useState(false);
  return (
    <AccountList.CreateItemContainer>
      <AccountList.CreateIcon
        onMouseEnter={() => setCreateDesc(true)}
        onMouseLeave={() => setCreateDesc(false)}
        onClick={() => setCreatingList(true)}
      />
      <ItemDescriptionPopupContainer
        text={"Create list"}
        visible={createDesc}
        backgroundsecondary={1}
      />
      <AccountList.Input visible={creatingList} />
      <AccountList.Confirm visible={creatingList} />
      <AccountList.Abort visible={creatingList} />
    </AccountList.CreateItemContainer>
  );
}
