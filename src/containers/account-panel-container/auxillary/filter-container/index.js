import React, { useState, useEffect } from "react";
import { stringify } from "query-string";
import { useHistory, useParams } from "react-router-dom";

import { Filter } from "../../../../components";
import useAuthListener from "../../../../hooks/useAuthListener";
import useFirestore from "../../../../hooks/useFirestore";
import FilterRowsContainer from "./items/filter-rows-container";

export default function FilterContainer() {
  const { slug } = useParams();
  const history = useHistory();
  const [user] = useAuthListener();

  const [loadingLists, lists] = useFirestore(
    user && `${user.displayName}`,
    "collection",
  );

  const [filter, setFilter] = useState({
    sortBy: "date",
    listType: "votes",
    list: null,
    show: "all",
    dateRange: [null, null],
    amount: 10,
    searchUpdate: false,
  });

  const { searchUpdate } = filter;

  useEffect(() => {
    if (!searchUpdate) return;
    history.push({
      pathname: `/account/${slug}/filter`,
      search: stringify(filter, {
        skipNull: true,
        sort: false,
        arrayFormat: "comma",
      }),
    });
    setFilter((prev) => ({ ...prev, searchUpdate }));
  }, [searchUpdate]);

  const handleCustomize = ({ target, value }) => {
    setFilter((prev) => ({ ...prev, [target]: value }));
  };

  return (
    <Filter>
      <FilterRowsContainer
        handleCustomize={handleCustomize}
        filter={filter}
        lists={lists}
        setFilter={setFilter}
        loadingLists={loadingLists}
      />
    </Filter>
  );
}
