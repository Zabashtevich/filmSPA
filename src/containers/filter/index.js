import React, { useEffect, useMemo, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useSelector } from "react-redux";

import { range } from "./../../utils";
import { Filter } from "../../components";
import { useCreditsContext } from "../../context";
import { FilterSkeleton } from "../../components/skeleton";

export default function FilterContainer() {
  const [, setCreditsProps] = useCreditsContext();
  const { userDataLoading, userlists, ratedMovies } = useSelector(
    (state) => state.userData,
  );

  const [
    { sortBy, itemType, listType, userlist, start, end },
    setState,
  ] = useState({
    sortBy: "date",
    itemType: "movie",
    listType: "voted",
    userlist: null,
    start: "all",
    end: "all",
  });

  function onFilterChange(category, value) {
    setState((prev) => ({ ...prev, [category]: value }));
  }

  function onListTypeChange(category, value) {
    if (value === "userlist") {
      setState((prev) => ({
        ...prev,
        [category]: value,
        userlist: userlists[0].id,
      }));
    } else {
      setState((prev) => ({ ...prev, [category]: value, userlist: null }));
    }
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
      setCreditsProps({ loading: false, array: ratedMovies });
    }
  }, [userDataLoading]);

  const valueDisabled = listType !== "userlist" && 1;

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
                    { name: "AMOUNT OF VOTES", value: "amountOfVotes" },
                    { name: "VOTE AVERAGES", value: "voteAverages" },
                  ].map((item) => (
                    <Filter.Value
                      key={item.value}
                      onClick={() => onFilterChange("sortBy", item.value)}
                      selected={sortBy === item.value && 1}
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
                      selected={itemType === item.value && 1}
                    >
                      {item.name}
                    </Filter.Value>
                  ))}
                </Filter.Row>
                <Filter.Row>
                  <Filter.Name>List type:</Filter.Name>
                  {[
                    { name: "VOTED", value: "voted" },
                    { name: "USERLIST", value: "userlist" },
                    { name: "FAVORITE", value: "favorite" },
                  ].map((item) => (
                    <Filter.Value
                      key={item.value}
                      onClick={() => onListTypeChange("listType", item.value)}
                      selected={listType === item.value && 1}
                      disabled={
                        item.value === "userlist" && userlists.length === 0 && 1
                      }
                    >
                      {item.name}
                    </Filter.Value>
                  ))}
                </Filter.Row>
                <Filter.Row>
                  <Filter.Name>Your list:</Filter.Name>
                  {userlists.map((item) => (
                    <Filter.Value
                      key={item.id}
                      onClick={() => onFilterChange("userlist", item.id)}
                      selected={userlist === item.id && 1}
                      disabled={valueDisabled}
                    >
                      {item.name.toUpperCase()}
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
                  <Filter.Select>
                    <Filter.Option
                      onChange={(e) => onFilterChange("end", e.target.value)}
                    >
                      ALL
                    </Filter.Option>
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
