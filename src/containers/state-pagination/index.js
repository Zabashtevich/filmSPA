import React from "react";
import { StatePagination } from "../../components";
import { range } from "../../utils";

export default function StatePaginationContainer({
  total,
  setPaginationSettings,
  active,
}) {
  return (
    <StatePagination>
      {range(1, total).map((item) => (
        <StatePagination.Item
          onClick={() =>
            setPaginationSettings((prev) => ({ ...prev, active: item }))
          }
          active={active === item && 1}
          key={item}
        >
          {item}
        </StatePagination.Item>
      ))}
    </StatePagination>
  );
}
