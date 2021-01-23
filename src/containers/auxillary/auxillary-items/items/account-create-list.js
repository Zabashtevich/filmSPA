import React, { useState } from "react";
import { AccountList } from "../../../../components";
import ItemDescriptionPopupContainer from "./item-description-popup-container";

export default function AccountCreateList() {
  const [createDesc, setCreateDesc] = useState(false);
  return (
    <AccountList.CreateItemContainer>
      <AccountList.CreateIcon
        onMouseEnter={() => setCreateDesc(true)}
        onMouseLeave={() => setCreateDesc(false)}
      />
      <ItemDescriptionPopupContainer
        text={"Create list"}
        visible={createDesc}
        backgroundsecondary={1}
        accountlistitem={1}
      />
      <AccountList.ButtonsWrapper>
        <AccountList.Input />
        <AccountList.Confirm />
        <AccountList.Abort />
      </AccountList.ButtonsWrapper>
    </AccountList.CreateItemContainer>
  );
}
