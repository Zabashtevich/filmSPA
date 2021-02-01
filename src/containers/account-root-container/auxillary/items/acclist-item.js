import React, { useState } from "react";
import { AccountList } from "../../../../components";
import ItemDescriptionPopupContainer from "./item-description-popup-container";

export default function AccountListItem({ item, i, showModal }) {
  const [deleteDesc, setDeleteDesc] = useState(false);
  const [renameDesc, setRenameDesc] = useState(false);

  return (
    <AccountList.ItemContainer>
      <AccountList.ImgWrapper>
        <AccountList.ImgIcon i={i + 1} />
      </AccountList.ImgWrapper>
      <AccountList.InfoWrapper>
        <AccountList.InfoRow row={1}>
          <AccountList.InfoTitle>Name:</AccountList.InfoTitle>
          <AccountList.InfoItem>{item.name}</AccountList.InfoItem>
        </AccountList.InfoRow>
        <AccountList.InfoRow>
          <AccountList.InfoTitle>Date:</AccountList.InfoTitle>
          <AccountList.InfoItem>123</AccountList.InfoItem>
        </AccountList.InfoRow>
        <AccountList.InfoRow>
          <AccountList.InfoTitle>Amount:</AccountList.InfoTitle>
          <AccountList.InfoItem>{item.content.length}</AccountList.InfoItem>
        </AccountList.InfoRow>
        <AccountList.ButtonsWrapper>
          <AccountList.Rename
            onMouseEnter={() => setRenameDesc(true)}
            onMouseLeave={() => setRenameDesc(false)}
            onClick={() => showModal({ target: "rename", id: item.id })}
          />
          <AccountList.Delete
            onMouseEnter={() => setDeleteDesc(true)}
            onMouseLeave={() => setDeleteDesc(false)}
            onClick={() =>
              showModal({ target: "delete", id: item.id, name: item.name })
            }
          />
          <ItemDescriptionPopupContainer
            text={"Rename list"}
            visible={renameDesc}
            backgroundsecondary={1}
          />
          <ItemDescriptionPopupContainer
            text={"Delete list"}
            visible={deleteDesc}
            backgroundsecondary={1}
          />
        </AccountList.ButtonsWrapper>
      </AccountList.InfoWrapper>
    </AccountList.ItemContainer>
  );
}
