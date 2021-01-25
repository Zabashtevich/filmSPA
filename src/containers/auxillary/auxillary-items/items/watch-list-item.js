import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { WatchList } from "../../../../components";
import ItemDescriptionPopupContainer from "./item-description-popup-container";

export default function WatchListItemContainer({
  data,
  deleteListSubmit,
  onAddToList,
  addedToList,
  onRemoveFromList,
}) {
  const [addDesc, setAddDesc] = useState(false);
  const [removeDesc, setRemoveDesc] = useState(false);
  const [deleteDesc, setDeleteDesc] = useState(false);
  return (
    <TransitionGroup>
      {data.map((item, i) => {
        return (
          <CSSTransition
            key={item.id}
            classNames="fade"
            timeout={{ enter: 500, exit: 600, appear: 500 }}
            appear={true}
          >
            <WatchList.ItemContainer>
              <WatchList.Number>{i + 1}</WatchList.Number>
              <WatchList.Name>{item.name.toUpperCase()}</WatchList.Name>
              <WatchList.IconsWrapper>
                {!addedToList && (
                  <WatchList.Add
                    onMouseEnter={() => setAddDesc(true)}
                    onMouseLeave={() => setAddDesc(false)}
                    onClick={() => {
                      setAddDesc(false);
                      onAddToList(item.id);
                    }}
                  />
                )}
                {addedToList && (
                  <WatchList.Delete
                    onClick={() => {
                      onRemoveFromList();
                      setAddDesc(false);
                      setDeleteDesc(false);
                    }}
                    onMouseEnter={() => setDeleteDesc(true)}
                    onMouseLeave={() => setDeleteDesc(false)}
                  />
                )}
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
                    <ItemDescriptionPopupContainer
                      backgroundsecondary={1}
                      text={"Delete movie from list"}
                      visible={deleteDesc}
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
