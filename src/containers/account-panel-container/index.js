import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { parse } from "query-string";

import { AccountPanel } from "../../components";
import useAuthListener from "../../hooks/useAuthListener";
import useFirestore from "../../hooks/useFirestore";
import { FilterContainer } from "./auxillary";
import { RowListItemContainer } from "../";
import { filterLogic } from "../../utils/utils";
import { PaginationSecondaryContainer, LoadMoreContainer } from "../";

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

  const [filterProperties, setFilterProperties] = useState({
    changed: false,
    sortBy: "date",
    listType: "votes",
    list: null,
    show: null,
    dateRange: null,
    amount: 10,
  });
  const { amount } = filterProperties;

  const [paginationOffset, setPaginationOffset] = useState({
    first: 0,
    last: amount,
  });

  const [accountArray, setAccountArray] = useState({
    loading: true,
    content: [],
  });

  useEffect(() => {
    if (!filterProperties.changed && !userDataLoading) {
      setAccountArray({ loading: false, content: userData });
      return;
    }
    if (filterProperties.changed && !userDataLoading) {
      if (!!filterProperties.list && !listsLoading) {
        filterLogic(
          filterProperties,
          lists.find((item) => item.id === +filterProperties.list)["content"],
          setAccountArray,
        );
      } else {
        filterLogic(filterProperties, userData, setAccountArray);
      }
      if (
        filterProperties.changed &&
        filterProperties.listType === "favorite"
      ) {
        filterLogic(filterProperties, favorite, setAccountArray);
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
        {!accountArray.loading &&
          accountArray.content.length > 0 &&
          accountArray.content
            .slice(paginationOffset.first, paginationOffset.last)
            .map((item, index) => (
              <RowListItemContainer
                key={item.id}
                item={item}
                index={index}
                user={user}
                userData={accountArray.content}
                accountPanelRow={true}
                favoriteRow={
                  filterProperties.listType === "favorite" ? true : false
                }
              />
            ))}
        {!accountArray.loading && accountArray.content.length === 0 && (
          <AccountPanel.Placeholder>
            You do not have any movie in your list :c
          </AccountPanel.Placeholder>
        )}
        {accountArray.content.length > 0 && (
          <PaginationSecondaryContainer
            length={accountArray.content.length}
            calculateOffset={calculateOffset}
            itemsAmount={filterProperties.amount}
          />
        )}
      </AccountPanel.CardsContainer>
    </AccountPanel>
  );
}
