import React, { useEffect } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import { PaginContainer } from "./../";
import CreditsItem from "./items/credits-item";
import { Credits } from "../../components";
import { useCreditsContext, usePaginContext } from "../../context";
import { range } from "../../utils";
import { CreditsSkeleton } from "../../components/skeleton";

export default function CreditsContainer() {
  const [{ active }, setPagination] = usePaginContext();
  const [{ loading, items }] = useCreditsContext();

  useEffect(() => {
    if (!loading) {
      setPagination((prev) => ({
        ...prev,
        amount: Math.ceil(items.length || 1 / 25),
        loading: false,
      }));
    }
  }, [loading]);
  console.log(items);

  return (
    <Credits data-testid="credits-container">
      <Credits.Title>Credits</Credits.Title>
      <SwitchTransition mode={"out-in"}>
        <CSSTransition key={loading} classNames="fade" timeout={500}>
          <Credits.Inner>
            {loading &&
              range(1, 25).map((item) => <CreditsSkeleton key={item} />)}
            {!loading &&
              items.slice(active * 25 - 25, active * 25).map((item, index) => {
                return <CreditsItem key={item.id} item={item} index={index} />;
              })}
            <PaginContainer />
          </Credits.Inner>
        </CSSTransition>
      </SwitchTransition>
    </Credits>
  );
}
