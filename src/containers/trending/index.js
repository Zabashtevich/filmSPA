import React, { useState } from "react";
import { useParams } from "react-router";

import { useTrending } from "./../../hooks";
import { Trending } from "../../components";
import { PaginContainer } from "..";
import { usePaginContext } from "../../context";
import TrendingItem from "./items/trending-item";

export default function TrendingContainer() {
  const [{ active }, setPagination] = usePaginContext();
  const [activePeriod, setActivePeriod] = useState("day");
  const [activeType, setActiveType] = useState("all");

  const { slug } = useParams();

  const [data, dataLoading] = useTrending(activeType, activePeriod, active);

  return (
    <Trending>
      <Trending.Title>TRENDING {slug.toUpperCase()}'s</Trending.Title>
      <Trending.Column>
        <Trending.Menu>
          <Trending.Subtitle>CARD TYPE</Trending.Subtitle>
          {["all", "movie", "tv", "person"].map((item) => (
            <Trending.Item key={item} selected={item === activeType && 1}>
              {item}
            </Trending.Item>
          ))}
        </Trending.Menu>

        <Trending.Menu>
          <Trending.Subtitle>PERIOD</Trending.Subtitle>
          {["day", "week"].map((item) => (
            <Trending.Item key={item} selected={item === activePeriod && 1}>
              {item}
            </Trending.Item>
          ))}
        </Trending.Menu>
      </Trending.Column>
      <Trending.Container>
        {!dataLoading &&
          data.results.map((item) => (
            <TrendingItem key={item.id} item={item} />
          ))}
        <PaginContainer />
      </Trending.Container>
    </Trending>
  );
}
