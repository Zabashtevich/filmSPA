import React from "react";

import { useTrending } from "./../../hooks";
import { Bar } from "../../components";
import BarForm from "./items/bar-form";

export default function BarContainer() {
  const [data, dataLoading] = useTrending("movie", "day");
  console.log(data, dataLoading);
  return (
    <Bar>
      <BarForm />

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
