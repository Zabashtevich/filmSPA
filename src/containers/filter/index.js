import React, { useEffect, useMemo, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useSelector } from "react-redux";

import { getFiltredArray, range } from "./../../utils";
import { Filter } from "../../components";
import { useCreditsContext } from "../../context";
import { FilterSkeleton } from "../../components/skeleton";

export default function FilterContainer() {
  const [, setCreditsProps] = useCreditsContext();
  const { userDataLoading, ratedMovies } = useSelector(
    (state) => state.userData,
  );

  const [state, setState] = useState({
    sortBy: "date",
    itemType: null,
    start: "all",
    end: "all",
  });

  const { sortBy, itemType, start } = state;

  function onFilterChange(category, value) {
    setState((prev) => ({ ...prev, [category]: value, touched: true }));
  }

  const offset = useMemo(
    () => ({
      date: (start !== "all" && start) || 1950,
      amount: 2022 - start || 72,
    }),
    [start],
  );

  useEffect(() => {
    if (!userDataLoading) {
      setCreditsProps({
        loading: false,
        array: getFiltredArray(ratedMovies, state),
      });
    }
  }, [userDataLoading, state]);

  return (
    <Filter>
      <Filter.Title>Customize your activity list</Filter.Title>
      <SwitchTransition mode="out-in">
        <CSSTransition classNames="fade" timeout={500} key={userDataLoading}>
          <Filter.Inner>
            {userDataLoading && (
              <Filter.Wrapper>
                <FilterSkeleton />
              </Filter.Wrapper>
            )}
            {!userDataLoading && (
              <Filter.Wrapper>
                <Filter.Row>
                  <Filter.Name>Sort by:</Filter.Name>
                  {[
                    { name: "DATE", value: "date" },
                    { name: "POPULARITY", value: "popularity" },
                    { name: "YOUR VOTE VALUE", value: "yourVoteValue" },
                    { name: "AMOUNT OF VOTES", value: "voteCount" },
                    { name: "VOTE AVERAGE", value: "voteAverage" },
                  ].map((item) => (
                    <Filter.Value
                      key={item.value}
                      onClick={() => onFilterChange("sortBy", item.value)}
                      selected={sortBy === item.value && 1}
                      className={`${sortBy === item.value ? "selected" : ""}`}
                    >
                      {item.name}
                    </Filter.Value>
                  ))}
                </Filter.Row>
                <Filter.Row>
                  <Filter.Name>Item type:</Filter.Name>
                  {[
                    { name: "MOVIE", value: "movie" },
                    { name: "TV", value: "tv" },
                  ].map((item) => (
                    <Filter.Value
                      key={item.value}
                      onClick={() => onFilterChange("itemType", item.value)}
                      selected={itemType === item.value && "selected"}
                      className={`${itemType === item.value ? "selected" : ""}`}
                    >
                      {item.name}
                    </Filter.Value>
                  ))}
                </Filter.Row>
                <Filter.Row>
                  <Filter.Name>Period:</Filter.Name>
                  <Filter.Subtitle>from</Filter.Subtitle>
                  <Filter.Select
                    onChange={(e) => onFilterChange("start", e.target.value)}
                  >
                    <Filter.Option value={"all"}>ALL</Filter.Option>
                    {range(1950, 72).map((item) => (
                      <Filter.Option key={item} value={item}>
                        {item}
                      </Filter.Option>
                    ))}
                  </Filter.Select>
                  <Filter.Subtitle>to</Filter.Subtitle>
                  <Filter.Select
                    onChange={(e) => onFilterChange("end", e.target.value)}
                  >
                    <Filter.Option>ALL</Filter.Option>
                    {range(offset.date, offset.amount).map((item) => (
                      <Filter.Option key={item} value={item}>
                        {item}
                      </Filter.Option>
                    ))}
                  </Filter.Select>
                </Filter.Row>
              </Filter.Wrapper>
            )}
          </Filter.Inner>
        </CSSTransition>
      </SwitchTransition>
    </Filter>
  );
}
