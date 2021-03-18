import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CreditsContainer } from "./..";

import { Filter } from "../../components";
import FilterRows from "./items/filter-rows";
import { FilterSkeleton } from "../../components/skeleton";

export default function FilterContainer() {
  const [skeletonDelay, setSkeletonDelay] = useState(true);
  const [state, setState] = useState({
    sortBy: "date",
    type: "voted",
    list: null,
    rating: "all",
    rangeStart: null,
    rangeEnd: null,
  });

  const { userDataLoading, userlists, ratedMovies } = useSelector(
    (state) => state.userData,
  );

  return (
    <Filter>
      <FilterSkeleton
        visible={userDataLoading}
        onExited={() => setSkeletonDelay(false)}
      />
      {!userDataLoading && !skeletonDelay && (
        <FilterRows setState={setState} state={state} userlists={userlists} />
      )}
      <CreditsContainer list={ratedMovies} loading={userDataLoading} />
    </Filter>
  );
}
