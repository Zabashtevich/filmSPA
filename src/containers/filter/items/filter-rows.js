import React from "react";

import { Filter } from "../../../components";
import { range } from "../../../utils";

export default function FilterRows({ setState, state, userlists }) {
  const { sortBy, type, list, rating, rangeStart, rangeEnd } = state;

  function handleChange(type, value) {
    if (type === "type" && value === "list") {
      setState((prev) => ({ ...prev, [type]: value, list: userlists[0].name }));
    } else {
      setState((prev) => ({ ...prev, [type]: value }));
    }
  }

  return (
    <>
      <Filter.Wrapper>
        <Filter.Title>sort by:</Filter.Title>
        {["date", "popular", "rating", "score", "votes"].map((item) => (
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
            disabled={item === "list" && userlists.length === 0}
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
            onClick={() => {
              if (type === "list") {
                handleChange("list", item);
              }
            }}
            disabled={type !== "list" ? 1 : 0}
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
