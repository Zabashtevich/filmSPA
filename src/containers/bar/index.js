import React, { useState } from "react";

import { useTrending } from "./../../hooks";
import { Bar } from "../../components";

export default function BarContainer() {
  const [inputValue, setInputValue] = useState("");
  const [data, dataLoading] = useTrending("movie", "day");

  function onChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <Bar>
      <Bar.Container>
        <Bar.Form>
          <Bar.Input />
          <Bar.Search value={inputValue} onChange={onChange} />
          <Bar.Submit />
        </Bar.Form>
      </Bar.Container>

      <Bar.Header>
        <Bar.Wrapper>
          <Bar.Trending />
          <Bar.Title>Trending</Bar.Title>
        </Bar.Wrapper>
      </Bar.Header>
      <Bar.List>
        {!dataLoading &&
          data.results.slice(1, 10).map((item) => (
            <Bar.Item key={item.id}>
              <Bar.Content>
                <Bar.Search />
                <Bar.Name>{item.title || item.name}</Bar.Name>
              </Bar.Content>
            </Bar.Item>
          ))}
      </Bar.List>
    </Bar>
  );
}
