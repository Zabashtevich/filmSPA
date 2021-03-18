import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Credits } from "../../components";
import { usePaginationContext } from "../../context";
import { sortMoviesByDate } from "../../utils";
import { PaginationContainer } from "./../";
import CreditsListItem from "./items/list-item";

export default function CreditsContainer({ list, loading }) {
  const { userDataLoading } = useSelector((state) => state.userData);
  const [{ active }, setPaginProps] = usePaginationContext();
  const [selected, setSelected] = useState("all");

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

  return (
    <Credits>
      <Credits.Header>
        <Credits.Title>Credits</Credits.Title>
        <Credits.Select>
          {["all", "tv", "movie"]
            .filter((item) => item !== selected)
            .map((item) => (
              <Credits.Option key={item}>{item}</Credits.Option>
            ))}
        </Credits.Select>
      </Credits.Header>
      <Credits.List>
        {!userDataLoading &&
          sortMoviesByDate(list)
            .slice(active * 10 - 10, active * 10)
            .map((item) => <CreditsListItem key={item.id} item={item} />)}
      </Credits.List>
      <PaginationContainer />
    </Credits>
  );
}
