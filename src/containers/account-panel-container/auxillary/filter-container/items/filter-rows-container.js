import React from "react";

import { Filter } from "../../../../../components";
import { filterRows } from "../../../../../constants/constants";
import { range } from "../../../../../utils/utils";
import { setFilterParams } from "../../../../../context/filter-context/actions";

export default function FilterRowsContainer({
  state,
  dispatch,
  lists,
  loadingLists,
  rangeStart,
  rangeEnd,
}) {
  const { sortBy, listType, listID, byRating, amount } = state;
  console.log(state);
  return (
    <>
      <Filter.Title>Customize your rating list</Filter.Title>
      <Filter.Item>
        <Filter.Name>sort by:</Filter.Name>
        {filterRows[0].map(({ value, name }, i) => (
          <Filter.Element
            selected={
              (sortBy === null && i === 0 && 1) || (sortBy === value && 1)
            }
            key={value}
            onClick={() => dispatch(setFilterParams({ sortBy: value }))}
          >
            {name}
          </Filter.Element>
        ))}
      </Filter.Item>
      <Filter.Item>
        <Filter.Name>list type:</Filter.Name>
        {filterRows[1].map(({ value, name }, i) => (
          <Filter.Element
            selected={
              (listType === null && i === 0 && 1) || (sortBy === value && 1)
            }
            key={value}
          >
            {name}
          </Filter.Element>
        ))}
      </Filter.Item>
      <Filter.Item>
        <Filter.Name>choose list:</Filter.Name>
        {!loadingLists && lists.length === 0 && (
          <Filter.Element disabled>you do not have any list :c</Filter.Element>
        )}
        {lists.map(({ name, id }) => {
          return (
            <Filter.Element
              selected={listID === id && 1}
              disabled={listType !== "userList" && 1}
              key={id}
            >
              {name.slice(0, 8)}
            </Filter.Element>
          );
        })}
      </Filter.Item>
      <Filter.Item>
        <Filter.Name>show:</Filter.Name>
        <Filter.Element selected={byRating === null && 1}>
          all rating
        </Filter.Element>
        {Array(10)
          .fill(1)
          .map((_, index) => (
            <Filter.Element selected={byRating === index && 1} key={index}>
              {index + 1}
            </Filter.Element>
          ))}
      </Filter.Item>
      <Filter.Item>
        <Filter.Name>date rang:</Filter.Name>
        since
        <Filter.Select>
          <Filter.Option value="all">all</Filter.Option>
          {range(1971, 50).map((item) => (
            <Filter.Option key={item}>{item}</Filter.Option>
          ))}
        </Filter.Select>
        to
        <Filter.Select>
          <Filter.Option value="all">all</Filter.Option>
          {range(rangeStart || 1971, 2021 - rangeStart || 50).map((item) => (
            <Filter.Option key={item}>{item}</Filter.Option>
          ))}
        </Filter.Select>
      </Filter.Item>
      <Filter.Item>
        <Filter.Name>amount</Filter.Name>
        {filterRows[2].map(({ value }, i) => (
          <Filter.Element
            selected={
              (i === 0 && amount === null && 1) || (amount === value && 1)
            }
            key={value}
          >
            {value}
          </Filter.Element>
        ))}
      </Filter.Item>
      <Filter.Item buttonswrapper={1}>
        <Filter.Button applybutton={1}>APPLY</Filter.Button>
        <Filter.Button discardbutton={1}>DISCARD</Filter.Button>
      </Filter.Item>
    </>
  );
}
