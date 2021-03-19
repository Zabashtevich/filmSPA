import React from "react";

import { Filter } from "../../../components";
import { range } from "../../../utils";

export default function FilterRows({ setState, state, userlists }) {
  const { sortBy, type, list, rating, rangeStart, rangeEnd } = state;

  function handleChange(type, value) {
    console.log(value);
    if (type === "type" && value === "list") {
      setState((prev) => ({ ...prev, [type]: value, list: userlists[0].name }));
    } else {
      setState((prev) => ({ ...prev, [type]: value }));
    }
  }

  const firstRange = rangeStart === "all" ? 1940 : rangeStart;
  const secondRange = rangeStart === "all" ? 82 : 2022 - rangeStart;
  console.log(firstRange, secondRange);
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
          onChange={({ target }) => handleChange("rangeStart", target.value)}
          value={rangeStart}
        >
          {["all"].concat(...range(1940, 82)).map((item) => (
            <Filter.Option key={item} value={item}>
              {item}
            </Filter.Option>
          ))}
        </Filter.Select>
        <Filter.Subtitle>to</Filter.Subtitle>
        <Filter.Select
          value={rangeEnd}
          onChange={({ target }) => handleChange("rangeEnd", target.value)}
        >
          {["all"].concat(...range(firstRange, secondRange)).map((item) => (
            <Filter.Option key={item} value={item}>
              {item}
            </Filter.Option>
          ))}
        </Filter.Select>
      </Filter.Wrapper>
    </>
  );
}
