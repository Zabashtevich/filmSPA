import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import { WatchList } from "../../../../components";

export function WatchListItemContainer({ item, i, deleteListSubmit }) {
  return (
    <WatchList.ItemContainer>
      <WatchList.Number>{i + 1}</WatchList.Number>
      <WatchList.Name>{item.name.toUpperCase()}</WatchList.Name>
      <WatchList.Date></WatchList.Date>
      <WatchList.IconsWrapper>
        <WatchList.Add />
        <WatchList.Remove onClick={(item) => deleteListSubmit(item.name)} />
      </WatchList.IconsWrapper>
    </WatchList.ItemContainer>
  );
}

export function WatchListCreateItemContainer({
  inputValue,
  setInputValue,
  setInputVisible,
  inputVisible,
  createListSubmit,
}) {
  const [createAnimating, setCreateAnimating] = useState(false);
  const [confirmAnimating, setConfirmAnimating] = useState(false);

  const creatListToogler = (e) => {
    if (
      e.target.classList.value.includes("Abort") ||
      e.target.classList.value.includes("CreateIcon")
    ) {
      setInputVisible((prev) => !prev);
    }
  };
  return (
    <WatchList.ItemContainer createitem={1}>
      <CSSTransition
        in={!inputVisible && !confirmAnimating}
        appear={true}
        timeout={{ enter: 300, exit: 300 }}
        unmountOnExit
        classNames="fade"
      >
        <WatchList.Placeholder>CREATE LIST</WatchList.Placeholder>
      </CSSTransition>
      <CSSTransition
        in={inputVisible && !createAnimating}
        appear={true}
        timeout={{ enter: 300, exit: 300 }}
        unmountOnExit
        classNames="fade"
      >
        <WatchList.Input
          placeholder={"Enter a name"}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </CSSTransition>
      <CSSTransition
        in={inputVisible && !createAnimating}
        appear={true}
        timeout={{ enter: 300, exit: 300 }}
        unmountOnExit
        classNames="fade"
        onEnter={() => setConfirmAnimating(true)}
        onExited={() => setConfirmAnimating(false)}
      >
        <WatchList.CreateListIconsWrapper>
          <WatchList.Confirm onClick={(e) => createListSubmit(e)} />
          <WatchList.Abort onClick={creatListToogler} />
        </WatchList.CreateListIconsWrapper>
      </CSSTransition>
      <CSSTransition
        in={!inputVisible && !confirmAnimating}
        appear={true}
        timeout={{ enter: 300, exit: 300 }}
        unmountOnExit
        classNames="fade"
        onEnter={() => setCreateAnimating(true)}
        onExited={() => setCreateAnimating(false)}
      >
        <WatchList.CreateListIconsWrapper>
          <WatchList.CreateIcon onClick={creatListToogler} />
        </WatchList.CreateListIconsWrapper>
      </CSSTransition>
    </WatchList.ItemContainer>
  );
}
