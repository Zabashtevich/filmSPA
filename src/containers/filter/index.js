import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CreditsContainer } from "./..";

import { Filter } from "../../components";
import FilterRows from "./items/filter-rows";
import { FilterSkeleton } from "../../components/skeleton";
import { getFiltredArray } from "../../utils";
import { useCreditsContext } from "../../context";

export default function FilterContainer() {
  const [, setCreditsProps] = useCreditsContext();
  const [skeletonDelay, setSkeletonDelay] = useState(true);
  const [state, setState] = useState({
    sortBy: "date",
    type: "voted",
    list: null,
    rating: "all",
    rangeStart: "all",
    rangeEnd: "all",
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
      if (type === "favorite") {
        setCreditsProps({
          loading: false,
          array: getFiltredArray(favoritedMovies, state),
        });
      } else if (type === "voted") {
        setCreditsProps({
          loading: false,
          array: getFiltredArray(ratedMovies, state),
        });
      } else if (type === "list") {
        setCreditsProps({
          loading: false,
          array: getFiltredArray(
            userlists.find((item) => item.name === list).content,
            state,
          ),
        });
      }
    }
    return () => setCreditsProps({ loading: true, array: null });
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
      <CreditsContainer />
    </Filter>
  );
}
