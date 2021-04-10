import React from "react";

import CreditsItem from "./items/credits-item";
import { Credits } from "../../components";
import { useCreditsContext } from "../../context";
import { useSelector } from "react-redux";

export default function CreditsContainer() {
  const { userDataLoading, ratedmovies } = useSelector(
    (state) => state.userData,
  );
  const [{ loading, array, type }] = useCreditsContext();
  console.log(loading, array);
  return (
    <Credits>
      {!loading &&
        array.map((item) => {
          return (
            <CreditsItem
              key={item.id}
              item={item}
              type={type}
              ratedmovies={ratedmovies}
            />
          );
        })}
    </Credits>
  );
}
