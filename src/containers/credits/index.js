import React, { useEffect } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import CreditsSkeletonItem from "./skeleton/credits-skeleton";
import { PaginContainer } from "./../";
import CreditsItem from "./items/credits-item";
import { Credits } from "../../components";
import { useCreditsContext, usePaginContext } from "../../context";
import { range } from "../../utils";

export default function CreditsContainer() {
  const [{ active }, setPagination] = usePaginContext();
  const [{ loading, items }] = useCreditsContext();

  useEffect(() => {
    if (!loading) {
      setPagination((prev) => ({
        ...prev,
        amount: Math.ceil((items.length || 1) / 25),
        loading: false,
      }));
    }
  }, [loading]);

  return (
    <>
      <Credits.Title>Credits</Credits.Title>

      <Credits data-testid="credits-container">
        <SwitchTransition mode={"out-in"}>
          <CSSTransition key={loading} classNames="fade" timeout={500}>
            <Credits.Inner>
              {loading &&
                range(1, 25).map((item) => <CreditsSkeletonItem key={item} />)}
              {!loading &&
                items.length > 0 &&
                items
                  .slice(active * 25 - 25, active * 25)
                  .map((item, index) => {
                    return (
                      <CreditsItem key={item.id} item={item} index={index} />
                    );
                  })}
              {!loading && items.length === 0 && (
                <Credits.Placeholder>Credits is empty</Credits.Placeholder>
              )}
              <PaginContainer />
            </Credits.Inner>
          </CSSTransition>
        </SwitchTransition>
      </Credits>
    </>
  );
}
