import React, { useEffect, useState } from "react";

import { useSearch, useTrending } from "./../../hooks";
import { Bar } from "../../components";
import BarItem from "./items/bar-item";

export default function BarContainer() {
  const [{ loading, array, type }, setItems] = useState({
    loading: true,
    array: null,
    type: null,
  });
  const [inputValue, setInputValue] = useState("");
  const [trendingData, trendingLoading] = useTrending("movie", "day");
  const [searchData, searchDataLoading] = useSearch(inputValue);

  function onChange(e) {
    setInputValue(e.target.value);
  }

  useEffect(() => {
    setItems((prev) => ({ ...prev, loading: true, array: null }));
    if (inputValue.length === 0 && !trendingLoading) {
      setItems({
        loading: false,
        array: trendingData.results.slice(0, 10),
        type: "trending",
      });
    }
    if (inputValue.length > 0 && !searchDataLoading) {
      setItems({
        loading: false,
        array: searchData.results.slice(0, 10),
        type: "search",
      });
    }
    // eslint-disable-next-line
  }, [
    searchData,
    searchDataLoading,
    trendingData,
    trendingLoading,
    inputValue,
  ]);
  console.log(loading, searchData, array);
  return (
    <Bar>
      <Bar.Container>
        <Bar.Form onSubmit={(e) => e.preventDefault()}>
          <Bar.Input value={inputValue} onChange={onChange} />
          <Bar.Search />
        </Bar.Form>
      </Bar.Container>

      <Bar.Header>
        <Bar.Wrapper>
          <Bar.Trending />
          {(type === "trending" || !type) && <Bar.Title>Trending</Bar.Title>}
          {type === "search" && <Bar.Title>Results</Bar.Title>}
        </Bar.Wrapper>
      </Bar.Header>
      <Bar.List>
        {!loading && array.length === 0 && (
          <Bar.Nodata>
            <Bar.Subtitle>Nothing was found</Bar.Subtitle>
          </Bar.Nodata>
        )}
        {!loading &&
          array
            .slice(0, 10)
            .map((item) => <BarItem key={item.id} item={item} />)}
      </Bar.List>
    </Bar>
  );
}
