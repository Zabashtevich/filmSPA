import React, { useState } from "react";

import { WatchList } from "../../../../components";
import ItemDescriptionPopupContainer from "./item-description-popup-container";

export default function WatchListCreateItemContainer({
  inputValue,
  setInputValue,
  inputVisible,
  createListSubmit,
  creatListToogler,
}) {
  const [createAnimating, setCreateAnimating] = useState(false);
  const [confirmAnimating, setConfirmAnimating] = useState(false);
  const [finishDesc, setFinishDesc] = useState(false);
  const [cancelDesc, setCancelDesc] = useState(false);

  return (
    <WatchList.ItemContainer createitem={1}>
      <WatchList.CreateTitle
        inputVisible={inputVisible}
        confirmAnimating={confirmAnimating}
      >
        CREATE LIST
      </WatchList.CreateTitle>
      <WatchList.Input
        placeholder={"Enter a name"}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        inputVisible={inputVisible}
        createAnimating={createAnimating}
      />
      <WatchList.CreateListIconsWrapper
        visibleFirst={inputVisible}
        visibleSecond={!createAnimating}
        setConfirmAnimating={setConfirmAnimating}
        onenter={() => setConfirmAnimating(true)}
        onexited={() => setConfirmAnimating(false)}
      >
        <WatchList.Confirm
          onClick={(e) => createListSubmit(e)}
          onMouseEnter={() => setFinishDesc(true)}
          onMouseLeave={() => setFinishDesc(false)}
        />
        <ItemDescriptionPopupContainer
          text={"Finish creating"}
          visible={finishDesc}
        />
        <WatchList.Abort
          onClick={creatListToogler}
          onMouseEnter={() => setCancelDesc(true)}
          onMouseLeave={() => setCancelDesc(false)}
        />
        <ItemDescriptionPopupContainer text={"Cancel"} visible={cancelDesc} />
      </WatchList.CreateListIconsWrapper>
      <WatchList.CreateListIconsWrapper
        visibleFirst={!inputVisible}
        visibleSecond={!confirmAnimating}
        onenter={() => setCreateAnimating(true)}
        onexited={() => setCreateAnimating(false)}
      >
        <WatchList.CreateIcon onClick={creatListToogler} />
      </WatchList.CreateListIconsWrapper>
    </WatchList.ItemContainer>
  );
}
