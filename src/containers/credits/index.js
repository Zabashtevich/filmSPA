import React from "react";

import CreditsItem from "./items/credits-item";
import { Credits } from "../../components";
import { useCreditsContext } from "../../context";
import { useSelector } from "react-redux";

export default function CreditsContainer() {
  const { profileLoading, profile } = useSelector((state) => state.userProfile);
  const { userDataLoading, votes } = useSelector((state) => state.userData);
  const [{ creditsLoading, array }] = useCreditsContext();

  const loading = userDataLoading || creditsLoading || profileLoading;

  return (
    <Credits>
      {!loading &&
        array.map((item) => {
          return (
            <CreditsItem
              key={item.id}
              item={item}
              votes={votes}
              profile={profile}
            />
          );
        })}
    </Credits>
  );
}
