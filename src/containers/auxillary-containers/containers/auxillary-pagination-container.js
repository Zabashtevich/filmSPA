import React, { useEffect, useState } from "react";
import { AuxillaryPagination } from "../../../components";

export default function AuxillaryPaginationContainer({ reviewsLength }) {
  const [paginationAmount, setPaginationAmount] = useState(null);
  const [amountLoading, setAmountLoading] = useState(true);

  useEffect(() => {
    setPaginationAmount(Array(Math.ceil(reviewsLength / 5)).fill(1));
    setAmountLoading(false);
  }, [reviewsLength]);

  return (
    <>
      {!amountLoading && (
        <AuxillaryPagination>
          {paginationAmount.map((item, i) => {
            return (
              <AuxillaryPagination.Item key={i}>
                {i + 1}
              </AuxillaryPagination.Item>
            );
          })}
        </AuxillaryPagination>
      )}
    </>
  );
}
