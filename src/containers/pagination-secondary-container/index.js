import React, { useEffect, useState } from "react";
import { PaginationSecondary } from "../../components";

export default function PaginationSecondaryContainer({
  length,
  calculateOffset,
  itemsAmount,
}) {
  const [pagination, setPagination] = useState({ loading: true, amount: null });
  const [activePaginationItem, setActivePaginationItem] = useState(1);

  useEffect(() => {
    setPagination({
      loading: false,
      amount: Array(Math.ceil(length / itemsAmount)).fill(1),
    });
  }, [length]);

  return (
    <>
      {!pagination.loading && (
        <PaginationSecondary>
          {pagination.amount.map((_, i) => {
            return (
              <PaginationSecondary.Item
                onClick={() => {
                  setActivePaginationItem(i + 1);
                  calculateOffset(i + 1);
                }}
                key={i}
                active={i + 1 === activePaginationItem && 1}
              >
                {i + 1}
              </PaginationSecondary.Item>
            );
          })}
        </PaginationSecondary>
      )}
    </>
  );
}
