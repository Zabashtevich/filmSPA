import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Credits } from "../../components";
import { CreditsSkeleton } from "../../components/skeleton";
import { useCreditsContext, usePaginationContext } from "../../context";
import { range } from "../../utils";
import { PaginationContainer } from "./../";
import CreditsListItem from "./items/list-item";

export default function CreditsContainer() {
  const { userDataLoading } = useSelector((state) => state.userData);
  const [{ active }, setPaginProps] = usePaginationContext();
  const [{ loading, array }] = useCreditsContext();
  const [unMountDelay, setUnMountDelay] = useState(true);

  const skeletonIsVisible = loading || userDataLoading;

  useEffect(() => {
    if (!loading) {
      setPaginProps((prev) => ({
        ...prev,
        loading: false,
        amount: 10,
        length: Math.ceil(array.length / 10),
      }));
    }
    return () =>
      setPaginProps({ loading: true, active: 1, amount: null, length: null });
  }, [loading]);

  return (
    <Credits>
      <Credits.Header>
        <Credits.Title>Credits</Credits.Title>
      </Credits.Header>
      <Credits.List>
        {range(1, 10).map((item) => (
          <CreditsSkeleton
            key={item}
            visible={skeletonIsVisible}
            onExited={() => setUnMountDelay(false)}
          />
        ))}
        {!skeletonIsVisible &&
          !unMountDelay &&
          array
            .slice(active * 10 - 10, active * 10)
            .map((item) => <CreditsListItem key={item.id} item={item} />)}
      </Credits.List>
      <PaginationContainer />
    </Credits>
  );
}
