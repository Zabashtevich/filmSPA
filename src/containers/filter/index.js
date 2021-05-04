import React from "react";

import { range } from "./../../utils";
import { Filter } from "../../components";

export default function FilterContainer({ filterSettings, setFilterSettings }) {
  const { sortBy, type, period } = filterSettings;

  return (
    <Filter data-testid="filter-container">
      <Filter.Title>Customize your activity list</Filter.Title>
      <Filter.Inner>
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
                selected={sortBy === item.value && 1}
              >
                {item.name}
              </Filter.Value>
            ))}
          </Filter.Row>
          <Filter.Row>
            <Filter.Name>Item type:</Filter.Name>
            {[
              { name: "ALL", value: "all" },
              { name: "MOVIE", value: "movie" },
              { name: "TV", value: "tv" },
            ].map((item) => (
              <Filter.Value
                key={item.value}
                selected={type === item.value && 1}
              >
                {item.name}
              </Filter.Value>
            ))}
          </Filter.Row>
          <Filter.Row>
            <Filter.Name>Period:</Filter.Name>
            <Filter.Subtitle>from</Filter.Subtitle>
            <Filter.Select>
              <Filter.Option value={"all"}>all</Filter.Option>
              {range(1950, 72).map((item) => (
                <Filter.Option key={item} value={item}>
                  {item}
                </Filter.Option>
              ))}
            </Filter.Select>
            <Filter.Subtitle>to</Filter.Subtitle>
            <Filter.Select>
              <Filter.Option>all</Filter.Option>
              {range(1950, 72).map((item) => (
                <Filter.Option key={item} value={item}>
                  {item}
                </Filter.Option>
              ))}
            </Filter.Select>
          </Filter.Row>
        </Filter.Wrapper>
      </Filter.Inner>
    </Filter>
  );
}
