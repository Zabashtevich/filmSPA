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

  

  const [filterProperties, setFilterProperties] = useState({
    changed: false,
    sortBy: "date",
    listType: "votes",
    list: null,
    show: null,
    dateRange: null,
    amount: null,
  });

  const [firstOffsetNumber, setFirstOffsetNumber] = useState(0);
  const [lastOffsetNumber, setLastOffsetNumber] = useState(filterProperties.amount || 10);

  const [accountArray, setAccountArray] = useState({
    loading: true,
    content: [],
  });
  const [itemsCount, setItemsCount] = useState(filterProperties.amount || 10);

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

  const calculateReviewsOffset = (buttonNumber) => {
    setFirstOffsetNumber(buttonNumber * 5 - 5);
    setLastOffsetNumber(buttonNumber * 5);
  };

  return (
    <AccountPanel>
      <FilterContainer />
      <AccountPanel.CardsContainer>
        {!accountArray.loading &&
          accountArray.content.length > 0 &&
          accountArray.content.slice(firstOffsetNumber, lastOffsetNumber).map((item, index) => (
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
        <LoadMoreContainer
          setItemsCount={setItemsCount}
          visible={accountArray.length > itemsCount}
          offset={filterProperties.amount || 10}
        />
        {!accountArray.loading && accountArray.content.length === 0 && (
          <AccountPanel.Placeholder>
            You do not have any movie in your list :c
          </AccountPanel.Placeholder>
        )}
        {filterProperties.amount < accountArray.content.length && <PaginationSecondaryContainer length={accountArray.content.length} calculateReviewsOffset={calculateReviewsOffset}/>}
      </AccountPanel.CardsContainer>
    </AccountPanel>
  );
}
