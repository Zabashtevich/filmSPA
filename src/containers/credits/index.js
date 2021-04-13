import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { PaginContainer } from "./../";
import CreditsItem from "./items/credits-item";
import { Credits } from "../../components";
import { useCreditsContext, usePaginContext } from "../../context";
import { range } from "../../utils";
import { CreditsSkeleton } from "../../components/skeleton";
import { CSSTransition, SwitchTransition } from "react-transition-group";

export default function CreditsContainer() {
  const { profileLoading, profile } = useSelector((state) => state.userProfile);
  const { userDataLoading, votes } = useSelector((state) => state.userData);

  const [{ active }, setPagination] = usePaginContext();
  const [{ creditsLoading, array }] = useCreditsContext();

  const loading = userDataLoading || creditsLoading || profileLoading;

  useEffect(() => {
    if (!creditsLoading) {
      setPagination((prev) => ({
        ...prev,
        amount: Math.ceil(array.length / 25),
        loading: false,
      }));
    }
  }, [creditsLoading]);

  return (
    <Credits>
      <SwitchTransition mode={"out-in"}>
        <CSSTransition key={loading} classNames="fade" timeout={500}>
          <Credits.Inner>
            {loading &&
              range(1, 25).map((item) => <CreditsSkeleton key={item} />)}
            {!loading &&
              array.slice(active * 25 - 25, active * 25).map((item, index) => {
                return (
                  <CreditsItem
                    key={item.id}
                    item={item}
                    votes={votes}
                    profile={profile}
                    index={index}
                  />
                );
              })}
            <PaginContainer />
          </Credits.Inner>
        </CSSTransition>
      </SwitchTransition>
    </Credits>
  );
}
