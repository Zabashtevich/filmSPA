import React from "react";
import { StatePagination } from "../../components";
import { range } from "../../utils";

export default function StatePaginationContainer({
  amount,
  setPagination,
  pagination,
}) {
  return (
    <StatePagination>
      {range(0, amount).map((item) => (
        <StatePagination.Item
          onClick={() => setPagination(item)}
          active={pagination === item && 1}
        >
          {item}
        </StatePagination.Item>
      ))}
    </StatePagination>
  );
}
