import React, { useEffect, useState } from "react";
import { AuxillaryPagination } from "../../../components";

export default function AuxillaryPaginationContainer({ reviewsLength }) {
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
        <AuxillaryPagination>
          {paginationAmount.map((_, i) => {
            return (
              <AuxillaryPagination.Item
                onClick={() => setActivePaginationItem(i + 1)}
                key={i}
                active={i + 1 === activePaginationItem ? 1 : 0}
              >
                {i + 1}
              </AuxillaryPagination.Item>
            );
          })}
        </AuxillaryPagination>
      )}
    </>
  );
}
