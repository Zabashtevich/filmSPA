import React, { useEffect, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import { PaginContainer, TabsContainer } from "../";
import { Trending } from "../../components";
import { TrendingSkeleton } from "../../components/skeleton";
import { usePaginContext } from "../../context";
import { useTrending } from "../../hooks";
import { range } from "../../utils";

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

  console.log(dataLoading);

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
      <SwitchTransition mode={"out-in"}>
        <CSSTransition
          key={`${dataLoading + active}`}
          classNames="fade"
          timeout={500}
        >
          <Trending.Container>
            {dataLoading &&
              range(1, 20).map((item) => <TrendingSkeleton key={item} />)}
            {!dataLoading &&
              data.results.map((item) => (
                <Trending.Item key={item.id}>
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
        </CSSTransition>
      </SwitchTransition>
      <PaginContainer />
    </Trending>
  );
}
