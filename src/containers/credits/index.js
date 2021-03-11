import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Credits } from "../../components";
import { CreditsItemSkeleton } from "../../components/skeleton";
import { range, sortMoviesByDate, splitByType } from "../../utils";
import { PaginationContainer } from "../";
import CreditsItem from "./items/credits-item";
import { usePaginationContext } from "../../context";

export default function CreditsContainer({ list, dataLoading }) {
  const { loading, ratedMovies } = useSelector((state) => state.userData);
  const [{ active }, setPaginProps] = usePaginationContext();

  const [{ value, visible }, setSelect] = useState({
    value: "All",
    visible: false,
  });
  const [array, setArray] = useState(list);

  function handleSelect(value) {
    if (value === "All") {
      setArray(list);
    } else if (value === "TV shows") {
      setArray(splitByType(list).tv);
    } else if (value === "Movies") {
      setArray(splitByType(list).movie);
    }
    setSelect((prev) => ({ ...prev, value }));
  }

  useEffect(() => {
    if (!dataLoading) {
      setPaginProps((prev) => ({
        ...prev,
        loading: false,
        amount: 10,
        length: Math.ceil(array.length / 10),
      }));
      console.log(array.length);
    }
    return () =>
      setPaginProps({ loading: true, active: 1, amount: null, length: null });
  }, [dataLoading, array]);

  return (
    <Credits>
      <Credits.Header>
        <Credits.Title>Filmography</Credits.Title>
        <Credits.Select
          onClick={() => setSelect((prev) => ({ ...prev, visible: !visible }))}
        >
          <Credits.Value>{value}</Credits.Value>
          <Credits.Arrow rotate={visible ? 1 : 0} />
          <Credits.Wrapper visible={visible}>
            {["All", "TV shows", "Movies"]
              .filter((item) => item !== value)
              .map((item) => (
                <Credits.Option key={item} onClick={() => handleSelect(item)}>
                  {item}
                </Credits.Option>
              ))}
          </Credits.Wrapper>
        </Credits.Select>
      </Credits.Header>
      <Credits.List>
        {range(1, 10).map((item) => (
          <CreditsItemSkeleton key={item} visible={loading || dataLoading} />
        ))}
        {!loading &&
          !dataLoading &&
          sortMoviesByDate(array)
            .slice(active * 10 - 10, active * 10)
            .map((item) => (
              <CreditsItem
                key={item.id}
                item={item}
                ratedMovies={ratedMovies}
              />
            ))}
      </Credits.List>
      <PaginationContainer />
    </Credits>
  );
}
