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
      <Pagin.Wrapper>{range(1, 10)}</Pagin.Wrapper>
      <Pagin.Wrapper>
        {start !== 1 && (
          <>
            <Pagin.Item>{amount}</Pagin.Item>
            <Pagin.Dummy>...</Pagin.Dummy>
          </>
        )}
        {range(1, amount)
          .slice(start, end)
          .map((item) => (
            <Pagin.Item key={item}>{item}</Pagin.Item>
          ))}
        {end !== amount && (
          <>
            <Pagin.Dummy>...</Pagin.Dummy>
            <Pagin.Item>{amount}</Pagin.Item>
          </>
        )}
      </Pagin.Wrapper>
    </Pagin>
  );
}
