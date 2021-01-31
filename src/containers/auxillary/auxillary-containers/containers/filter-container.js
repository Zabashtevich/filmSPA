import React, { useState, useEffect } from "react";

import { Filter } from "../../../../components";
import { filterRows } from "../../../../constants/constants";
import useAuthListener from "../../../../hooks/useAuthListener";
import useFirestore from "../../../../hooks/useFirestore";
import { range } from "../../../../utils/utils";

export default function FilterContainer() {
  const { user } = useAuthListener();
  const [loadingLists, lists] = useFirestore(user.displayName, "collection");
  const [favoriteLoading, favorites] = useFirestore(
    user.displayName,
    "collection",
    "favorite",
  );

  const [filter, setFilter] = useState({
    sortBy: "date",
    listType: "votes",
    list: null,
    show: "all",
    dateRange: [null, null],
    amount: 10,
  });
  const handleCustomize = ({ target, value }) => {
    if (target === "list" && filter.listType !== "lists") {
      return;
    }
    setFilter((prev) => ({ ...prev, [target]: value }));
  };

  return (
    <Filter>
      <Filter.Title>Customize your rating list</Filter.Title>
      <Filter.Item>
        <Filter.Name>sort by:</Filter.Name>
        {filterRows[0].map((item) => (
          <Filter.Element
            onClick={() =>
              handleCustomize({ target: "sortBy", value: item.name })
            }
            selected={item.name === filter.sortBy && 1}
            key={item.name}
          >
            {item.name}
          </Filter.Element>
        ))}
      </Filter.Item>
      <Filter.Item>
        <Filter.Name>list type:</Filter.Name>
        {filterRows[1].map((item) => (
          <Filter.Element
            onClick={() =>
              handleCustomize({ target: "listType", value: item.name })
            }
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
            console.log(filter.list, item.name);
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
          selected={filter.show === "all" && 1}
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
        <Filter.Select>
          <Filter.Option value="none">none</Filter.Option>
          {range(1971, 50).map((item) => (
            <Filter.Option key={item}>{item}</Filter.Option>
          ))}
        </Filter.Select>
        to
        <Filter.Select>
          <Filter.Option value="none">none</Filter.Option>
          {range(1971, 50).map((item) => (
            <Filter.Option key={item}>{item}</Filter.Option>
          ))}
        </Filter.Select>
        <Filter.Button>choose</Filter.Button>
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
    </Filter>
  );
}
