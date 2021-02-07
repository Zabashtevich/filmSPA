import React from "react";
import { useHistory } from "react-router-dom";

import { Filter } from "../../../../../components";
import { filterRows } from "../../../../../constants/constants";
import { range } from "../../../../../utils/utils";

export default function FilterRowsContainer({
  handleCustomize,
  filter,
  lists,
  setFilter,
  loadingLists,
}) {
  const history = useHistory();

  return (
    <>
      <Filter.Title>Customize your rating list</Filter.Title>
      <Filter.Item>
        <Filter.Name>sort by:</Filter.Name>
        {filterRows[0].map((item, i) => (
          <Filter.Element
            onClick={() =>
              handleCustomize({ target: "sortBy", value: item.value })
            }
            selected={item.value === filter.sortBy && 1}
            key={item.name}
          >
            {item.name}
          </Filter.Element>
        ))}
      </Filter.Item>
      <Filter.Item>
        <Filter.Name>list type:</Filter.Name>
        {filterRows[1].map((item, i) => (
          <Filter.Element
            onClick={() => {
              handleCustomize({ target: "listType", value: item.name });
              if (item.name === "lists") {
                handleCustomize({ target: "list", value: lists[0].id });
              }
            }}
            disabled={item.name === "lists" && lists.length === 0 && 1}
            selected={item.name === filter.listType && 1}
            key={item.name}
          >
            {item.name}
          </Filter.Element>
        ))}
      </Filter.Item>
      <Filter.Item>
        <Filter.Name>choose list:</Filter.Name>
        {!loadingLists && lists.length === 0 && (
          <Filter.Element disabled>you do not have any list :c</Filter.Element>
        )}
        {!loadingLists &&
          lists.length > 0 &&
          lists.map((item) => {
            return (
              <Filter.Element
                key={item.id}
                selected={filter.list === item.id && 1}
                disabled={filter.listType !== "lists" && 1}
                onClick={() =>
                  handleCustomize({ target: "list", value: item.id })
                }
              >
                {item.name.slice(0, 8)}
              </Filter.Element>
            );
          })}
      </Filter.Item>
      <Filter.Item>
        <Filter.Name>show:</Filter.Name>
        <Filter.Element
          selected={filter.show === "all"}
          onClick={() => handleCustomize({ target: "show", value: "all" })}
        >
          all rating
        </Filter.Element>
        {Array(10)
          .fill(1)
          .map((_, index) => (
            <Filter.Element
              key={index}
              selected={filter.show === index + 1 && 1}
              onClick={() =>
                handleCustomize({ target: "show", value: index + 1 })
              }
            >
              {index + 1}
            </Filter.Element>
          ))}
      </Filter.Item>
      <Filter.Item>
        <Filter.Name>date rang:</Filter.Name>
        since
        <Filter.Select
          onChange={(e) => {
            handleCustomize({
              target: "dateRange",
              value: [e.target.value, filter.dateRange[1]],
            });
          }}
        >
          <Filter.Option value="all">all</Filter.Option>
          {range(1971, 50).map((item) => (
            <Filter.Option key={item}>{item}</Filter.Option>
          ))}
        </Filter.Select>
        to
        <Filter.Select
          onChange={(e) => {
            handleCustomize({
              target: "dateRange",
              value: [filter.dateRange[0], e.target.value],
            });
          }}
        >
          <Filter.Option value="all">all</Filter.Option>
          {range(
            filter.dateRange[0] || 1971,
            (filter.dateRange[0] && 2021 - filter.dateRange[0]) || 50,
          ).map((item) => (
            <Filter.Option key={item}>{item}</Filter.Option>
          ))}
        </Filter.Select>
      </Filter.Item>
      <Filter.Item>
        <Filter.Name>amount</Filter.Name>
        {filterRows[2].map((item) => (
          <Filter.Element
            selected={filter.amount === item.value && 1}
            key={item.value}
            onClick={() =>
              handleCustomize({ target: "amount", value: item.value })
            }
          >
            {item.value}
          </Filter.Element>
        ))}
      </Filter.Item>
      <Filter.Item buttonswrapper={1}>
        <Filter.Button
          applybutton={1}
          onClick={() => setFilter((prev) => ({ ...prev, searchUpdate: true }))}
        >
          APPLY
        </Filter.Button>
        <Filter.Button
          discardbutton={1}
          onClick={() => {
            setFilter((prev) => ({ ...prev, searchUpdate: false }));
            history.push({
              search: null,
            });
          }}
        >
          DISCARD
        </Filter.Button>
      </Filter.Item>
    </>
  );
}
