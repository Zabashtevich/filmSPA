import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { parse } from "query-string";

import { AccountPanel } from "../../components";
import useAuthListener from "../../hooks/useAuthListener";
import useFirestore from "../../hooks/useFirestore";
import { FilterContainer } from "./auxillary";
import { RowListItemContainer } from "../";
import LoadMoreContainer from "../load-more-container";
import { filterLogic } from "../../utils/utils";

export default function AccountPanelContainer() {
  const [user] = useAuthListener();
  const { search } = useLocation();
  const [itemsCount, setItemsCount] = useState(10);

  const [filterProperties, setFilterProperties] = useState({
    changed: false,
    sortBy: "date",
    listType: "votes",
    list: null,
    show: null,
    dateRange: null,
    amount: null,
  });
  const [accountArray, setAccountArray] = useState({
    loading: true,
    content: null,
  });

  const [userDataLoading, userData] = useFirestore(
    user && `${user.displayName}`,
    `moviesrated`,
  );

  const [listsLoading, lists] = useFirestore(
    user && `${user.displayName}`,
    `collection`,
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
  console.log(accountArray);
  return (
    <AccountPanel>
      <FilterContainer />
      <AccountPanel.CardsContainer>
        {!accountArray.loading &&
          accountArray.content.length > 0 &&
          accountArray.content.map((item, index) => (
            <RowListItemContainer
              key={item.id}
              item={item}
              index={index}
              user={user}
              userData={userData}
              accountPanelRow={true}
            />
          ))}
        <LoadMoreContainer
          setItemsCount={setItemsCount}
          visible={userData.length > itemsCount}
          offset={10}
        />
        {!accountArray.loading && accountArray.content.length === 0 && (
          <AccountPanel.Placeholder>
            You do not have any movie in your list :c
          </AccountPanel.Placeholder>
        )}
      </AccountPanel.CardsContainer>
    </AccountPanel>
  );
}
