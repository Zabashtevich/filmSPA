import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import { PaginSkeleton } from "./../../components/skeleton";
import { usePaginContext } from "./../../context";
import { Pagin } from "../../components";
import { getOffsetEnd, getOffsetStart, range } from "./../../utils";

export default function PaginContainer() {
  const [{ amount, loading, active }, setPaginState] = usePaginContext();

  const start = getOffsetStart(active, amount);
  const end = getOffsetEnd(active, amount);

  return (
    <SwitchTransition mode={"out-in"}>
      <CSSTransition key={loading} classNames="fade" timeout={500}>
        <Pagin>
          {start !== 0 && <DummyLeft setPaginState={setPaginState} />}
          {loading && range(1, 10).map((item) => <PaginSkeleton key={item} />)}
          {!loading &&
            range(1, amount)
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
            <DummyRight amount={amount} setPaginState={setPaginState} />
          )}
        </Pagin>
      </CSSTransition>
    </SwitchTransition>
  );
}

function DummyLeft({ setPaginState }) {
  return (
    <>
      <Pagin.Item
        onClick={() => setPaginState((prev) => ({ ...prev, active: 1 }))}
      >
        1
      </Pagin.Item>
      <Pagin.Dummy>...</Pagin.Dummy>
    </>
  );
}

function DummyRight({ amount, setPaginState }) {
  return (
    <>
      <Pagin.Dummy>...</Pagin.Dummy>
      <Pagin.Item
        onClick={() => setPaginState((prev) => ({ ...prev, active: amount }))}
      >
        {amount}
      </Pagin.Item>
    </>
  );
}
