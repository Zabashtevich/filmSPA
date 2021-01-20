import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { WatchList } from "../../../../components";

export function WatchListItemContainer({ data, deleteListSubmit }) {
  return (
    <TransitionGroup>
      {data.map((item, i) => {
        return (
          <CSSTransition
            key={item.name + i}
            classNames="fade"
            timeout={{ enter: 200, exit: 300, appear: 300 }}
            appear={true}
          >
            <WatchList.ItemContainer>
              <WatchList.Number>{i + 1}</WatchList.Number>
              <WatchList.Name>{item.name.toUpperCase()}</WatchList.Name>
              <WatchList.Date></WatchList.Date>
              <WatchList.IconsWrapper>
                <WatchList.Add />
                <WatchList.Remove onClick={() => deleteListSubmit(item.name)} />
              </WatchList.IconsWrapper>
            </WatchList.ItemContainer>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
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
        <WatchList.CreateTitle>CREATE LIST</WatchList.CreateTitle>
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

export function WatchListPlaceholderContainer() {
  return (
    <TransitionGroup>
      <CSSTransition
        appear={true}
        classNames="fade"
        timeout={{ enter: 200, exit: 300, appear: 300 }}
      >
        <WatchList.ItemContainer placeholder={1}>
          <WatchList.Placeholder>
            You have not any list but you can create one
          </WatchList.Placeholder>
        </WatchList.ItemContainer>
      </CSSTransition>
    </TransitionGroup>
  );
}
