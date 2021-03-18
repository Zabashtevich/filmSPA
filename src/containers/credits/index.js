import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Credits } from "../../components";
import { CreditsSkeleton } from "../../components/skeleton";
import { usePaginationContext } from "../../context";
import { range, sortMoviesByDate } from "../../utils";
import { PaginationContainer } from "./../";
import CreditsListItem from "./items/list-item";

export default function CreditsContainer({ list, loading }) {
  const { userDataLoading } = useSelector((state) => state.userData);
  const [{ active }, setPaginProps] = usePaginationContext();
  const [unMountDelay, setUnMountDelay] = useState(true);

  useEffect(() => {
    setPaginProps((prev) => ({
      ...prev,
      loading: false,
      amount: 10,
      length: Math.ceil(list.length / 10),
    }));
    return () =>
      setPaginProps({ loading: true, active: 1, amount: null, length: null });
  }, []);

  const skeletonIsVisible = loading || userDataLoading;

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
          sortMoviesByDate(list)
            .slice(active * 10 - 10, active * 10)
            .map((item) => <CreditsListItem key={item.id} item={item} />)}
      </Credits.List>
      <PaginationContainer />
    </Credits>
  );
}
