import React from "react";

import { Filter } from "../../../components";
import { range } from "../../../utils";

export default function FilterRows({ setState, state, userlists }) {
  const { sortBy, type, list, rating, rangeStart, rangeEnd } = state;

  function handleChange(type, value) {
    setState((prev) => ({ ...prev, [type]: value }));
  }
  console.log(userlists);

  return (
    <>
      <Filter.Wrapper>
        <Filter.Title>sort by:</Filter.Title>
        {["date", "popularity", "rating", "score", "votes"].map((item) => (
          <Filter.Value
            key={item}
            selected={item === sortBy ? 1 : 0}
            onClick={() => handleChange("sortBy", item)}
          >
            {item}
          </Filter.Value>
        ))}
      </Filter.Wrapper>
      <Filter.Wrapper>
        <Filter.Title>type:</Filter.Title>
        {["voted", "list", "favorite"].map((item) => (
          <Filter.Value
            key={item}
            selected={item === type ? 1 : 0}
            onClick={() => handleChange("type", item)}
          >
            {item}
          </Filter.Value>
        ))}
      </Filter.Wrapper>
      <Filter.Wrapper>
        <Filter.Title>list:</Filter.Title>
        {userlists.map((item) => (
          <Filter.Value
            key={item.id}
            selected={item === list ? 1 : 0}
            onClick={() => handleChange("list", item)}
          >
            {item.name}
          </Filter.Value>
        ))}
      </Filter.Wrapper>
      <Filter.Wrapper>
        <Filter.Title>rating:</Filter.Title>
        {["all"].concat(...range(1, 10)).map((item) => (
          <Filter.Value
            key={item}
            selected={item === rating ? 1 : 0}
            onClick={() => handleChange("rating", item)}
          >
            {item}
          </Filter.Value>
        ))}
      </Filter.Wrapper>
      <Filter.Wrapper>
        <Filter.Title>date:</Filter.Title>
        <Filter.Subtitle>from</Filter.Subtitle>
        <Filter.Select
          onChange={(e) =>
            setState((prev) => ({ ...prev, rangeStart: e.target.value }))
          }
          value={rangeStart || "all"}
        >
          {[null].concat(...range(1940, 82)).map((item) => (
            <Filter.Option key={item} value={item}>
              {item || "all"}
            </Filter.Option>
          ))}
        </Filter.Select>
        <Filter.Subtitle>to</Filter.Subtitle>
        <Filter.Select
          value={rangeEnd || "all"}
          onChange={(e) =>
            setState((prev) => ({ ...prev, rangeEnd: e.target.value }))
          }
        >
          {[null]
            .concat(...range(rangeStart || 1940, 2022 - rangeStart || 82))
            .map((item) => (
              <Filter.Option key={item} value={item}>
                {item || "all"}
              </Filter.Option>
            ))}
        </Filter.Select>
      </Filter.Wrapper>
    </>
  );
}
