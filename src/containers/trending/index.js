import React, { useEffect, useState } from "react";

import { useFetch } from "./../../hooks";
import { Trending } from "../../components";
import { PaginContainer } from "..";
import { usePaginContext } from "../../context";
import TrendingItem from "./items/trending-item";
import { range } from "../../utils";
// import { TrendingSkeleton } from "../../components/skeleton";
import { CSSTransition, SwitchTransition } from "react-transition-group";

export default function TrendingContainer() {
  const [{ active }, setPagination] = usePaginContext();
  const [activePeriod, setActivePeriod] = useState("day");
  const [activeType, setActiveType] = useState("all");

  const [data, dataLoading] = useFetch({
    type: "trending",
    target: activeType,
    period: activePeriod,
    page: active,
  });

  useEffect(() => {
    if (!dataLoading) {
      setPagination((prev) => ({
        ...prev,
        loading: false,
        amount: data.total_pages,
      }));
    }
  }, [dataLoading]);

  return (
    <Trending>
      <Trending.Title>TRENDING</Trending.Title>
      <Trending.Outer>
        <Trending.Column>
          <Trending.Menu>
            <Trending.Subtitle>CARD TYPE</Trending.Subtitle>
            {["all", "movie", "tv", "person"].map((item) => (
              <Trending.Item
                key={item}
                selected={item === activeType && 1}
                onClick={() => setActiveType(item)}
              >
                {item}
              </Trending.Item>
            ))}
          </Trending.Menu>

          <Trending.Menu>
            <Trending.Subtitle>PERIOD</Trending.Subtitle>
            {["day", "week"].map((item) => (
              <Trending.Item
                key={item}
                selected={item === activePeriod && 1}
                onClick={() => setActivePeriod(item)}
              >
                {item}
              </Trending.Item>
            ))}
          </Trending.Menu>
        </Trending.Column>
        <SwitchTransition mode={"out-in"}>
          <CSSTransition
            timeout={500}
            classNames="fade"
            key={`${dataLoading} ${active} ${activePeriod} ${activeType}`}
          >
            <Trending.Container>
              {/* {dataLoading &&
              range(1, 20).map((item) => <TrendingSkeleton key={item} />)} */}
              {!dataLoading &&
                data.results.map((item) => (
                  <TrendingItem
                    key={item.id}
                    item={item}
                    direction={activeType}
                  />
                ))}
              <PaginContainer />
            </Trending.Container>
          </CSSTransition>
        </SwitchTransition>
      </Trending.Outer>
    </Trending>
  );
}
