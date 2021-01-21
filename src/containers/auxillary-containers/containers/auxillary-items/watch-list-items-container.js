import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { WatchList } from "../../../../components";
import ItemDescriptionPopupContainer from "./item-description-popup-container";

export function WatchListItemContainer({
  data,
  deleteListSubmit,
  onAddToList,
}) {
  const [addDesc, setAddDesc] = useState(false);
  const [removeDesc, setRemoveDesc] = useState(false);
  return (
    <TransitionGroup>
      {data.map((item, i) => {
        return (
          <CSSTransition
            key={item.id}
            classNames="fade"
            timeout={{ enter: 200, exit: 300, appear: 300 }}
            appear={true}
          >
            <WatchList.ItemContainer>
              <WatchList.Number>{i + 1}</WatchList.Number>
              <WatchList.Name>{item.name.toUpperCase()}</WatchList.Name>
              <WatchList.Date></WatchList.Date>
              <WatchList.IconsWrapper>
                <WatchList.Add
                  onMouseEnter={() => setAddDesc(true)}
                  onMouseLeave={() => setAddDesc(false)}
                  onClick={() => onAddToList(item.id)}
                />
                <WatchList.Remove
                  onClick={() => deleteListSubmit(item.id, item.name)}
                  onMouseEnter={() => setRemoveDesc(true)}
                  onMouseLeave={() => setRemoveDesc(false)}
                />
                {i === data.length - 1 && (
                  <>
                    <ItemDescriptionPopupContainer
                      backgroundsecondary={1}
                      text={"Delete list"}
                      visible={removeDesc}
                    />
                    <ItemDescriptionPopupContainer
                      backgroundsecondary={1}
                      text={"Add movie to list"}
                      visible={addDesc}
                    />
                  </>
                )}
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
