import React from "react";

import { Filter } from "../../../../../components";
import { filterRows } from "../../../../../constants/constants";
import { checkFilterItemSelected, range } from "../../../../../utils/utils";

export default function FilterRowsContainer({
  state,
  lists,
  updateFilterState,
}) {
  const { sortBy, listType, listID, byRating, amount, rangeStart } = state;
  return (
    <>
      <Filter.Title>Customize your rating list</Filter.Title>
      <Filter.Item>
        <Filter.Name>sort by:</Filter.Name>
        {filterRows[0].map(({ value, name }, i) => (
          <Filter.Element
            selected={checkFilterItemSelected(i, sortBy, value)}
            key={value}
            onClick={() => updateFilterState({ sortBy: value })}
          >
            {name}
          </Filter.Element>
        ))}
      </Filter.Item>
      <Filter.Item>
        <Filter.Name>list type:</Filter.Name>
        {filterRows[1].map(({ value, name }, i) => (
          <Filter.Element
            selected={checkFilterItemSelected(i, listType, value)}
            key={value}
            disabled={value === "userList" && lists.length === 0 && 1}
            onClick={() => {
              if (value === "userList") {
                updateFilterState({ listType: value, listID: lists[0].id });
              } else {
                updateFilterState({ listType: value });
              }
            }}
          >
            {name}
          </Filter.Element>
        ))}
      </Filter.Item>
      <Filter.Item>
        <Filter.Name>choose list:</Filter.Name>
        {lists.length === 0 && (
          <Filter.Element disabled>you do not have any list :c</Filter.Element>
        )}
        {lists.map(({ name, id }) => {
          return (
            <Filter.Element
              selected={listID === id && 1}
              disabled={listType !== "userList" && 1}
              key={id}
              onClick={() => updateFilterState({ listID: id })}
            >
              {name.slice(0, 8) + "..."}
            </Filter.Element>
          );
        })}
      </Filter.Item>
      <Filter.Item>
        <Filter.Name>show:</Filter.Name>
        <Filter.Element
          selected={byRating === null && 1}
          onClick={() => updateFilterState({ byRating: null })}
        >
          all rating
        </Filter.Element>
        {Array(10)
          .fill(1)
          .map((_, index) => (
            <Filter.Element
              selected={byRating === index && 1}
              key={index}
              onClick={() => updateFilterState({ byRating: index + 1 })}
            >
              {index + 1}
            </Filter.Element>
          ))}
      </Filter.Item>
      <Filter.Item>
        <Filter.Name>date rang:</Filter.Name>
        since
        <Filter.Select
          onChange={(e) => updateFilterState({ rangeStart: e.target.value })}
        >
          <Filter.Option value="all">all</Filter.Option>
          {range(1971, 50).map((item) => (
            <Filter.Option key={item} value={item}>
              {item}
            </Filter.Option>
          ))}
        </Filter.Select>
        to
        <Filter.Select
          onChange={(e) => updateFilterState({ rangeEnd: e.target.value })}
        >
          <Filter.Option value="all">all</Filter.Option>
          {range(+rangeStart || 1971, 2021 - +rangeStart || 50).map((item) => (
            <Filter.Option key={item} value={item}>
              {item}
            </Filter.Option>
          ))}
        </Filter.Select>
      </Filter.Item>
      <Filter.Item>
        <Filter.Name>amount</Filter.Name>
        {filterRows[2].map(({ value }, i) => (
          <Filter.Element
            selected={checkFilterItemSelected(i, amount, value)}
            key={value}
            onClick={() => updateFilterState({ amount: value })}
          >
            {value}
          </Filter.Element>
        ))}
      </Filter.Item>
      <Filter.Item buttonswrapper={1}>
        <Filter.Button
          applybutton={1}
          onClick={() => updateFilterState({ applied: true })}
        >
          APPLY
        </Filter.Button>
        <Filter.Button discardbutton={1} onClick={() => updateFilterState()}>
          DISCARD
        </Filter.Button>
      </Filter.Item>
    </>
  );
}
