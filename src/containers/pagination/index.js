import React, { useState } from "react";

import { Pagination } from "../../components";
import { range } from "./../../utils";

export default function PaginationContainer({ length, amount }) {
  const [{ start, end }, setOffset] = useState({
    start: 1,
    end: amount,
  });

  function handleClick(value) {
    if (value === start) return;
    setOffset({ start: value, end: value + amount });
  }

  return (
    <Pagination>
      {start !== 1 && (
        <>
          <Pagination.Left onClick={() => handleClick(start - 1)} />
          <Pagination.Item onClick={() => handleClick(1)}>1</Pagination.Item>
          <Pagination.Dummy>...</Pagination.Dummy>
        </>
      )}
      {range(1, length)
        .slice(start, end)
        .map((item) => {
          return (
            <Pagination.Item
              key={item}
              active={start === item && 1}
              onClick={() => handleClick(item)}
            >
              {item}
            </Pagination.Item>
          );
        })}
      {start !== length && (
        <>
          <Pagination.Dummy>...</Pagination.Dummy>
          <Pagination.Item onClick={() => handleClick(length)}>
            {length}
          </Pagination.Item>
          <Pagination.Right onClick={() => handleClick(start + 1)} />
        </>
      )}
    </Pagination>
  );
}
