import React, { useEffect, useState } from "react";

import { useSearch, useTrending } from "./../../hooks";
import { Bar } from "../../components";
import BarItem from "./items/bar-item";

export default function BarContainer() {
  const [{ loading, array }, setItems] = useState({
    loading: true,
    array: null,
    type: null,
  });
  const [inputValue, setInputValue] = useState("");
  const [trending, trendingLoading] = useTrending("movie", "day");
  const [searchedData, searchedDataLoading] = useSearch(inputValue);

  function onChange(e) {
    setInputValue(e.target.value);
  }

  useEffect(() => {
    setItems({ loading: true, array: null, type: null });
    if (inputValue.length === 0 && !trendingLoading) {
      setItems({ loading: false, array: trending.results });
    }
  }, [searchedData, searchedDataLoading, trending, trendingLoading]);

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
          <Bar.Title>Trending</Bar.Title>
        </Bar.Wrapper>
      </Bar.Header>
      <Bar.List>
        {!loading &&
          array
            .slice(1, 10)
            .map((item) => <BarItem key={item.id} item={item} />)}
      </Bar.List>
    </Bar>
  );
}
