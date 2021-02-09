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
  const [array, setArray] = useState({ processed: true, content: [] });
  const [user] = useAuthListener();

  const userData = useSelector((store) => store.userData);
  const [filterSettings] = useFilterContext();

  const { loading, userLists, favoritedMovies, ratedMovies } = userData;
  const { listType, amount } = filterSettings;
  const { processed, content } = array;

  const [paginationOffset, setPaginationOffset] = useState({
    first: 0,
    last: amount || 10,
  });

  useEffect(() => {
    if (loading) return;
    filterLogic(
      filterSettings,
      ratedMovies,
      userLists,
      favoritedMovies,
      setArray,
    );
  }, [loading, filterSettings]);

  const calculateOffset = (paginationIndex) => {
    const itemsAmount = amount || 10;
    setPaginationOffset({
      first: paginationIndex * itemsAmount - itemsAmount,
      last: itemsAmount * paginationIndex,
    });
  };

  return (
    <AccountPanel>
      <FilterContainer />
      <AccountPanel.CardsContainer>
        {!loading &&
          !processed &&
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
        {!loading && !processed && content.length > 0 && (
          <PaginationSecondaryContainer
            length={content.length}
            calculateOffset={calculateOffset}
            itemsAmount={amount || 10}
          />
        )}
      </AccountPanel.CardsContainer>
    </AccountPanel>
  );
}
