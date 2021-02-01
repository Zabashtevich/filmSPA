import React, { useState } from "react";
import { AcclistCreateItem } from "../../../../components";
import ItemDescriptionPopupContainer from "../../description-popup-container";

export default function AccountCreateList({
  visible,
  creatingList,
  createToggler,
  inputValue,
  setInputValue,
  createList,
}) {
  const [createDesc, setCreateDesc] = useState(false);
  const [confirmDesc, setConfirmDesc] = useState(false);
  const [delcineDesc, setDeclineDesc] = useState(false);

  const hideDesc = () => {
    setCreateDesc(false);
    setConfirmDesc(false);
    setDeclineDesc(false);
  };

  return (
    <AcclistCreateItem visible={visible}>
      <AcclistCreateItem.CreateIcon
        onMouseEnter={() => setCreateDesc(true)}
        onMouseLeave={() => setCreateDesc(false)}
        onClick={(e) => {
          createToggler(e);
          hideDesc();
        }}
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
      <AcclistCreateItem.Input
        visible={creatingList}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <AcclistCreateItem.Wrapper visible={creatingList}>
        <AcclistCreateItem.Confirm
          onMouseEnter={() => setConfirmDesc(true)}
          onMouseLeave={() => setConfirmDesc(false)}
          onClick={(event) => {
            createList(event);
            hideDesc();
          }}
        />
        <AcclistCreateItem.Abort
          onMouseEnter={() => setDeclineDesc(true)}
          onMouseLeave={() => setDeclineDesc(false)}
          onClick={(e) => {
            hideDesc();
            createToggler(e);
          }}
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
