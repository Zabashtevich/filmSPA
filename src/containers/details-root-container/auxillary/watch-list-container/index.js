import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import { WatchList } from "../../../../components";
// import {
//   createListLogic,
//   deleteList,
//   deleteFromList,
//   addToList,
// } from "../../../../utils/firebase";
import useFirestore from "../../../../hooks/useFirestore";
import CreateItemContainer from "./items/create-item-container";
import ItemContainer from "./items/item-container";
import PlaceholderContainer from "./items/placeholder-container";
import { useAuthContext } from "../../../../context";

export default function WatchListContainer({
  user,
  watchListPopupVisible,
  slug,
  item,
}) {
  return (
    <>
      {/* <CSSTransition
        in={user && watchListPopupVisible}
        appear={true}
        timeout={{ enter: 600, exit: 600 }}
        unmountOnExit
        classNames="fade"
      >
        <WatchList>
          {!dataLoading && (
            <>
              {data.length > 0 ? (
                <ItemContainer
                  deleteListSubmit={deleteListSubmit}
                  data={data}
                  onAddToList={onAddToList}
                  addedToList={addedToList}
                  onRemoveFromList={onRemoveFromList}
                />
              ) : (
                <PlaceholderContainer />
              )}

              <CreateItemContainer
                inputValue={inputValue}
                setInputValue={setInputValue}
                setInputVisible={setInputVisible}
                inputVisible={inputVisible}
                createListSubmit={createListSubmit}
                creatListToogler={creatListToogler}
              />
            </>
          )}
        </WatchList>
      </CSSTransition> */}
    </>
  );
}
