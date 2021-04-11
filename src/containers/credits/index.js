import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { PaginContainer } from "./../";
import CreditsItem from "./items/credits-item";
import { Credits } from "../../components";
import { useCreditsContext, usePaginContext } from "../../context";

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
    </Credits>
  );
}
