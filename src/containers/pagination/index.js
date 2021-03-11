import React from "react";

import { usePaginationContext } from "./../../context";
import { Pagination } from "../../components";
import { range } from "./../../utils";
import { PaginationSkeleton } from "../../components/skeleton";

export default function PaginationContainer() {
  const [
    { amount, length, loading, active },
    setPaginProps,
  ] = usePaginationContext();

  function handleClick(value) {
    if (value === active) return;
    setPaginProps((prev) => ({ ...prev, active: value }));
  }

  const previousvisible = !loading && active !== 1 && length > amount;
  const nextvisible = !loading && active !== length && length > amount;
  const start = (active > 5 && active - amount / 2) || (active <= 5 && 0);
  const end = active + amount / 2;

  return (
    <Pagination>
      {previousvisible && (
        <>
          <Pagination.Left
            onClick={() => handleClick(!loading && active - 1)}
          />
          <Pagination.Item onClick={() => handleClick(1)}>1</Pagination.Item>
          <Pagination.Dummy>...</Pagination.Dummy>
        </>
      )}

      {loading &&
        range(1, amount).map((item) => <PaginationSkeleton key={item} />)}

      {!loading &&
        range(1, length)
          .slice(start, end)
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

      {nextvisible && (
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
