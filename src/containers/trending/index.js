import React, { useState } from "react";

import { Trending } from "../../components";
import { useTrending } from "./../../hooks";

export default function TrendingContainer() {
  const [data, dataLoading] = useTrending("tv", 0);
  console.log(data);
  return (
    <Trending>
      <Trending.Wrapper>
        <Trending.Title></Trending.Title>
      </Trending.Wrapper>
      <Trending.List>
        {!dataLoading &&
          data.results.map((item) => {
            console.log(item);
            return (
              <Trending.Item>
                <Trending.Poster />
                <Trending.Info>
                  <Trending.Name></Trending.Name>
                  <Trending.Description></Trending.Description>
                  <Trending.Overview></Trending.Overview>
                  <Trending.Row>
                    <Trending.Subtitle></Trending.Subtitle>
                    <Trending.Average></Trending.Average>
                    <Trending.Count></Trending.Count>
                  </Trending.Row>
                </Trending.Info>
              </Trending.Item>
            );
          })}
      </Trending.List>
    </Trending>
  );
}
