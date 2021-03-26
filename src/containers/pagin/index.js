import React from "react";

import { usePaginContext } from "./../../context";
import { getOffsetEnd, getOffsetStart, range } from "./../../utils";
import { Pagin } from "../../components";

export default function PaginContainer() {
  const [{ active, loading, amount }, setPaginState] = usePaginContext();

  const start = getOffsetStart(active, amount);
  const end = getOffsetEnd(active, amount);

  return (
    <Pagin>
      <Pagin.Wrapper visible={!loading}>
        {start !== 0 && (
          <>
            <Pagin.Item
              onClick={() => setPaginState((prev) => ({ ...prev, active: 1 }))}
            >
              1
            </Pagin.Item>
            <Pagin.Dummy>...</Pagin.Dummy>
          </>
        )}
        {range(1, amount)
          .slice(start, end)
          .map((item) => (
            <Pagin.Item
              key={item}
              onClick={() =>
                setPaginState((prev) => ({ ...prev, active: item }))
              }
              selected={active === item && 1}
            >
              {item}
            </Pagin.Item>
          ))}
        {end !== amount && (
          <>
            <Pagin.Dummy>...</Pagin.Dummy>
            <Pagin.Item
              onClick={() =>
                setPaginState((prev) => ({ ...prev, active: amount }))
              }
            >
              {amount}
            </Pagin.Item>
          </>
        )}
      </Pagin.Wrapper>
    </Pagin>
  );
}
