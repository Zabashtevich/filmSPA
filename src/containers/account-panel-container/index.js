import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AccountPanel } from "../../components";
import useAuthListener from "../../hooks/useAuthListener";
import useFirestore from "../../hooks/useFirestore";
import { FilterContainer } from "./auxillary";
import { RowListItemContainer } from "../";
import { filterLogic } from "../../utils/utils";
import { PaginationSecondaryContainer } from "../";
import { useFilterContext } from "../../context";
import { List } from "../../components/pagination/styles/pagination";

export default function AccountPanelContainer() {
  const [array, setArray] = useState({ processed: false, content: [] });
  const [user] = useAuthListener();

  const userData = useSelector((store) => store.userData);
  const [state, dispatchFilter] = useFilterContext();

  const { loading, userLists, favoritedMovies, ratedMovies } = userData;
  const { listType, listID, amount } = state;
  const { processed, content } = array;

  const [paginationOffset, setPaginationOffset] = useState({
    first: 0,
    last: amount,
  });

  useEffect(() => {
    if (!loading || !state.applied) return;
    if (listType === null || "votes") {
      filterLogic(state, ratedMovies, setArray);
    } else if (listType === "userLists") {
      if (!!listID) {
        filterLogic(
          state,
          userLists.find((item) => item.id === listID),
          setArray,
        );
      } else {
        filterLogic(state, userLists[0], setArray);
      }
    } else if (listType === "favorite") {
      filterLogic(state, favoritedMovies, setArray);
    }
  }, [state]);

  const calculateOffset = (paginationIndex) => {
    setPaginationOffset({
      first: paginationIndex * amount - amount,
      last: amount * paginationIndex,
    });
  };

  return (
    <AccountPanel>
      <FilterContainer />
      <AccountPanel.CardsContainer>
        {!loading &&
          content.length > 0 &&
          content
            .slice(paginationOffset.first, paginationOffset.last)
            .map((item, index) => (
              <RowListItemContainer
                key={item.id}
                item={item}
                index={index}
                user={user}
                array={content}
                accountPanelRow={true}
                hideVotePopup={listType === "favorite" ? true : false}
              />
            ))}
        {!loading && content.length === 0 && (
          <AccountPanel.Placeholder>
            You do not have any movie in your list :c
          </AccountPanel.Placeholder>
        )}
        {content.length > 0 && (
          <PaginationSecondaryContainer
            length={content.length}
            calculateOffset={calculateOffset}
            itemsAmount={amount}
          />
        )}
      </AccountPanel.CardsContainer>
    </AccountPanel>
  );
}
