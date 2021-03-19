import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CreditsContainer } from "./..";

import { Filter } from "../../components";
import FilterRows from "./items/filter-rows";
import { FilterSkeleton } from "../../components/skeleton";
import { getFiltredArray } from "../../utils";

export default function FilterContainer() {
  const [skeletonDelay, setSkeletonDelay] = useState(true);
  const [array, setArray] = useState([]);
  const [state, setState] = useState({
    sortBy: "date",
    type: "voted",
    list: null,
    rating: "all",
    rangeStart: null,
    rangeEnd: null,
  });

  const {
    userDataLoading,
    userlists,
    ratedMovies,
    favoritedMovies,
  } = useSelector((state) => state.userData);

  const { list, type } = state;

  useEffect(() => {
    if (!userDataLoading) {
      if (type === "favorited") {
        setArray(getFiltredArray(favoritedMovies, state));
      } else if (type === "voted") {
        setArray(getFiltredArray(ratedMovies, state));
      } else if (type === "list") {
        setArray(
          getFiltredArray(
            userlists.find((item) => item.name === list).content,
            state,
          ),
        );
      }
    }
  }, [userDataLoading, state]);

  return (
    <Filter>
      <FilterSkeleton
        visible={userDataLoading}
        onExited={() => setSkeletonDelay(false)}
      />
      {!userDataLoading && !skeletonDelay && (
        <FilterRows setState={setState} state={state} userlists={userlists} />
      )}
      <CreditsContainer list={array} loading={userDataLoading} />
    </Filter>
  );
}
