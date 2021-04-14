import React, { useState } from "react";

import { TabsContainer } from "../";
import { Trending } from "../../components";

export default function TrendingContainer() {
  const [activeType, setActiveType] = useState("all");
  const [activePeriod, setActivePeriod] = useState("day");
  return (
    <Trending>
      <Trending.Header>
        <TabsContainer
          tabs={{
            title: null,
            array: [
              { title: "all", value: "all" },
              { title: "movie", value: "movie" },
              { title: "tv", value: "tv" },
            ],
          }}
          active={activeType}
          setActiveTab={setActiveType}
        />
        <TabsContainer
          tabs={{
            title: null,
            array: [
              { title: "day", value: "day" },
              { title: "week", value: "week" },
            ],
          }}
          active={activePeriod}
          setActiveTab={setActivePeriod}
        />
      </Trending.Header>
      <Trending.Container>
        <Trending.Item>
          <Trending.Poster />
          <Trending.Average></Trending.Average>
          <Trending.Wrapper>
            <Trending.Title></Trending.Title>
          </Trending.Wrapper>
        </Trending.Item>
      </Trending.Container>
    </Trending>
  );
}
