import React from "react";

import { usePaginationContext } from "./../../context";
import { Pagination } from "../../components";
import { range } from "./../../utils";

export default function PaginationContainer() {
  const [
    { amount, length, loading, active },
    setPaginProps,
  ] = usePaginationContext();

  function handleClick(value) {
    if (value === active) return;
    setPaginProps((prev) => ({ ...prev, active: value }));
  }
  return (
    <Pagination>
      {active !== 1 && (
        <>
          <Pagination.Left onClick={() => handleClick(active - 1)} />
          <Pagination.Item onClick={() => handleClick(1)}>1</Pagination.Item>
          <Pagination.Dummy>...</Pagination.Dummy>
        </>
      )}
      {range(1, length)
        .slice(active - 1, active + amount)
        .map((item) => {
          return (
            <Pagination.Item
              key={item}
              active={active === item && 1}
              onClick={() => handleClick(item)}
            >
              {item}
            </Pagination.Item>
          );
        })}
      {active !== length && (
        <>
          <Pagination.Dummy>...</Pagination.Dummy>
          <Pagination.Item onClick={() => handleClick(length)}>
            {length}
          </Pagination.Item>
          <Pagination.Right onClick={() => handleClick(active + 1)} />
        </>
      )}
    </Pagination>
  );
}
