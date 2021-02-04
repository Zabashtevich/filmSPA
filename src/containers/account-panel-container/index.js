import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { parse } from "query-string";

import { AccountPanel } from "../../components";
import useAuthListener from "../../hooks/useAuthListener";
import useFirestore from "../../hooks/useFirestore";
import { FilterContainer } from "./auxillary";
import { RowListItemContainer } from "../";
import LoadMoreContainer from "../load-more-container";

export default function AccountPanelContainer() {
  const params = useParams();
  const [user] = useAuthListener();
  const { search } = useLocation();
  const [itemsCount, setItemsCount] = useState(10);
  const [parsedSearch, setParsedSearch] = useState(null);

  const [userDataLoading, userData] = useFirestore(
    user && `${user.displayName}`,
    `moviesrated`,
  );
  useEffect(() => {
    console.log(parse(search));
  }, [search]);
  console.log(userData);
  return (
    <AccountPanel>
      <FilterContainer slug={params.slug} />
      <AccountPanel.CardsContainer>
        {!userDataLoading &&
          userData.map((item, index) => (
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
