import React from "react";

import CreditsItem from "./items/credits-item";
import { Credits } from "../../components";
import { useCreditsContext } from "../../context";
import { useSelector } from "react-redux";

export default function CreditsContainer() {
  const { userDataLoading, votes } = useSelector((state) => state.userData);
  const [{ creditsLoading, array, type }] = useCreditsContext();

  const loading = userDataLoading || creditsLoading;

  return (
    <Credits>
      {!loading &&
        array.map((item) => {
          return (
            <CreditsItem key={item.id} item={item} type={type} votes={votes} />
          );
        })}
    </Credits>
  );
}
