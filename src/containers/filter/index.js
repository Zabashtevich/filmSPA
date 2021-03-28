import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";

import { range } from "./../../utils";
import { Filter } from "../../components";

export default function FilterContainer() {
  const { userDataLoading, userlists } = useSelector((state) => state.userData);

  const [{ sortBy, listType, userlist, start, end }, setState] = useState({
    sortBy: "date",
    listType: "voted",
    userlist: null,
    start: "all",
    end: "all",
  });

  function onFilterChange(category, value) {
    setState((prev) => ({ ...prev, [category]: value }));
  }

  const offset = useMemo(
    () => ({
      date: (start !== "all" && start) || 1950,
      amount: 2022 - start || 72,
    }),
    [start],
  );

  return (
    <Filter>
      <Filter.Title>Customize your activity list</Filter.Title>
      <Filter.Wrapper>
        <Filter.Row>
          <Filter.Name>Sort by:</Filter.Name>
          <Filter.Value>DATE</Filter.Value>
          <Filter.Value>POPULARITY</Filter.Value>
          <Filter.Value>YOUR VOTE VALUE</Filter.Value>
          <Filter.Value>AMOUNT OF VOTES</Filter.Value>
          <Filter.Value>VOTE AVERAGE</Filter.Value>
        </Filter.Row>
        <Filter.Row>
          <Filter.Name>List type:</Filter.Name>
          <Filter.Value>VOTED</Filter.Value>
          <Filter.Value>USERLIST</Filter.Value>
          <Filter.Value>FAVORITE</Filter.Value>
        </Filter.Row>
        <Filter.Row>
          <Filter.Name>Your list:</Filter.Name>
          {!userDataLoading &&
            userlists.map((item) => (
              <Filter.Value key={item.id}>
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
    </Filter>
  );
}
