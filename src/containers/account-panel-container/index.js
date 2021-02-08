import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { parse } from "query-string";
import { useDispatch } from "react-redux";

import { AccountPanel } from "../../components";
import useAuthListener from "../../hooks/useAuthListener";
import useFirestore from "../../hooks/useFirestore";
import { FilterContainer } from "./auxillary";
import { RowListItemContainer } from "../";
import { filterLogic } from "../../utils/utils";
import { PaginationSecondaryContainer } from "../";

export default function AccountPanelContainer() {
  const [user] = useAuthListener();
  const { search } = useLocation();

  const [userDataLoading, userData] = useFirestore(
    user && `${user.displayName}`,
    `moviesrated`,
  );
  const [listsLoading, lists] = useFirestore(
    user && `${user.displayName}`,
    `collection`,
  );
  const [favoriteLoading, favorite] = useFirestore(
    user && `${user.displayName}`,
    "collection",
    "favorite",
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (userDataLoading || listsLoading || favoriteLoading) return;
  }, [userDataLoading, listsLoading, favoriteLoading]);

  const [filterProperties, setFilterProperties] = useState({
    changed: false,
    sortBy: "date",
    listType: "votes",
    list: null,
    show: null,
    dateRange: null,
    amount: 10,
  });

  const [array, setArray] = useState({
    loading: true,
    content: [],
  });

  const { amount, changed, list, listType } = filterProperties;
  const { loading, content } = array;

  const [paginationOffset, setPaginationOffset] = useState({
    first: 0,
    last: amount,
  });

  useEffect(() => {
    if (!changed && !userDataLoading) {
      setArray({ loading: false, content: userData });
      return;
    }
    if (changed && !userDataLoading) {
      if (!!list && !listsLoading) {
        filterLogic(
          filterProperties,
          lists.find((item) => item.id === +list)["content"],
          setArray,
        );
      } else {
        filterLogic(filterProperties, userData, setArray);
      }
      if (changed && listType === "favorite") {
        filterLogic(filterProperties, favorite, setArray);
      }
    }
  }, [filterProperties, userDataLoading, userData]);

  useEffect(() => {
    if (!search) return;
    setFilterProperties((prev) => ({
      ...prev,
      ...parse(search),
      changed: true,
    }));
  }, [search]);

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
