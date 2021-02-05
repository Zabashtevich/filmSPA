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
  const [accountArray, setAccountArray] = useState(null);

  const [userDataLoading, userData] = useFirestore(
    user && `${user.displayName}`,
    `moviesrated`,
  );

  useEffect(() => {
    if (!filterProperties.changed && !userDataLoading) {
      setAccountArray(userData);
      return;
    }
    filterLogic(filterProperties, userData, setAccountArray);
  }, [filterProperties, userDataLoading, userData]);

  useEffect(() => {
    if (!search) return;
    setFilterProperties((prev) => ({
      ...prev,
      ...parse(search),
      changed: true,
    }));
  }, [search]);

  return (
    <AccountPanel>
      <FilterContainer />
      <AccountPanel.CardsContainer>
        {!!accountArray &&
          accountArray.map((item, index) => (
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
      </AccountPanel.CardsContainer>
    </AccountPanel>
  );
}
