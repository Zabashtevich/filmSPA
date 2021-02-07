import React, { useState, useEffect } from "react";
import { stringify } from "query-string";
import { useHistory, useParams } from "react-router-dom";

import { Filter } from "../../../../components";
import useAuthListener from "../../../../hooks/useAuthListener";
import useFirestore from "../../../../hooks/useFirestore";
import FilterRowsContainer from "./items/filter-rows-container";
import { useFilterContext } from "../../../../context";

export default function FilterContainer() {
  const { slug } = useParams();
  const history = useHistory();
  const [user] = useAuthListener();

  const [loadingLists, lists] = useFirestore(
    user && `${user.displayName}`,
    "collection",
  );

  const [state, dispatch] = useFilterContext();

  useEffect(() => {
    // history.push({
    //   pathname: `/account/${slug}/filter`,
    //   search: stringify(filter, {
    //     skipNull: true,
    //     sort: false,
    //     arrayFormat: "comma",
    //   }),
    // });
  }, []);

  return (
    <Filter>
      <FilterRowsContainer
        state={state}
        dispatch={dispatch}
        lists={lists}
        loadingLists={loadingLists}
      />
    </Filter>
  );
}
