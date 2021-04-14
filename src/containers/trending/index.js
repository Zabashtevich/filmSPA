import React, { useEffect, useState } from "react";

import { PaginContainer, TabsContainer } from "../";
import { Trending } from "../../components";
import { usePaginContext } from "../../context";
import { useTrending } from "../../hooks";

export default function TrendingContainer() {
  const [{ active }, setPagin] = usePaginContext();

  const [activeType, setActiveType] = useState("all");
  const [activePeriod, setActivePeriod] = useState("day");

  const [data, dataLoading] = useTrending(activeType, activePeriod, active);

  useEffect(() => {
    if (!dataLoading) {
      setPagin((prev) => ({
        ...prev,
        amount: data.total_pages,
        loading: false,
      }));
    }
  }, [dataLoading]);

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
              {!!item.vote_average && (
                <Trending.Average>{item.vote_average}</Trending.Average>
              )}
              <Trending.Wrapper>
                <Trending.Title>{item.title || item.name}</Trending.Title>
              </Trending.Wrapper>
            </Trending.Item>
          ))}
      </Trending.Container>
      <PaginContainer />
    </Trending>
  );
}
