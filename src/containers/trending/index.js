import React, { useState } from "react";

import { TabsContainer } from "../";
import { Trending } from "../../components";
import { Item } from "../../components/trending/styles/trending";
import { useTrending } from "../../hooks";

export default function TrendingContainer() {
  const [activeType, setActiveType] = useState("all");
  const [activePeriod, setActivePeriod] = useState("day");

  const [data, dataLoading] = useTrending(activeType, activePeriod);

  console.log(data);
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
        {!dataLoading &&
          data.results.map((item) => (
            <Trending.Item>
              <Trending.Poster slug={item.poster_path} />
              <Trending.Average>{item.vote_average}</Trending.Average>
              <Trending.Wrapper>
                <Trending.Title>{item.title}</Trending.Title>
              </Trending.Wrapper>
            </Trending.Item>
          ))}
      </Trending.Container>
    </Trending>
  );
}
