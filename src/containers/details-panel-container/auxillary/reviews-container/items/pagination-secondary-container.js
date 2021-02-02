import React, { useEffect, useState } from "react";
import { PaginationSecondary } from "../../../../../components";

export default function PaginationSecondaryContainer({
  reviewsLength,
  calculateReviewsOffset,
}) {
  const [paginationAmount, setPaginationAmount] = useState(null);
  const [activePaginationItem, setActivePaginationItem] = useState(1);
  const [amountLoading, setAmountLoading] = useState(true);
  useEffect(() => {
    setPaginationAmount(Array(Math.ceil(reviewsLength / 5)).fill(1));
    setAmountLoading(false);
  }, [reviewsLength]);

  return (
    <>
      {!amountLoading && (
        <PaginationSecondary>
          {paginationAmount.map((_, i) => {
            return (
              <PaginationSecondary.Item
                onClick={() => {
                  setActivePaginationItem(i + 1);
                  calculateReviewsOffset(i + 1);
                }}
                key={i}
                active={i + 1 === activePaginationItem ? 1 : 0}
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
