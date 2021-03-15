import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { PaginationContainer, TabsContainer } from "..";

import { Trending } from "../../components";
import { TrendingSkeleton } from "../../components/skeleton";
import { periodType, typeTab } from "../../constants/fixtures";
import { usePaginationContext } from "../../context";
import { getYearFromString, range } from "../../utils";
import { useFetch } from "./../../hooks";

export default function TrendingContainer() {
  const [activeType, setActiveType] = useState("all");
  const [activePeriod, setActivePeriod] = useState(0);
  const [array, setArray] = useState([]);
  const [{ active }, setPaginProps] = usePaginationContext();
  const [data, dataLoading] = useFetch(activeType, activePeriod, active);
  useEffect(() => {
    if (!dataLoading) {
      setArray(data.results);
      setPaginProps((prev) => ({
        ...prev,
        loading: false,
        amount: 10,
        length: data.total_pages,
      }));
    }
  }, [data, dataLoading]);

  return (
    <Trending>
      <Trending.Wrapper>
        <TabsContainer
          tabs={typeTab}
          setActive={setActiveType}
          active={activeType}
        />
        <Trending.Title>TRENDING</Trending.Title>
        <TabsContainer
          tabs={periodType}
          setActive={setActivePeriod}
          active={activePeriod}
        />
      </Trending.Wrapper>
      <Trending.List>
        {dataLoading &&
          range(1, 20).map((item) => (
            <CSSTransition
              key={item}
              classNames="fade"
              timeout={{ enter: 500, exit: 0, appear: 500 }}
            >
              <TrendingSkeleton />
            </CSSTransition>
          ))}
        {!dataLoading &&
          array.map((item) => {
            return (
              <CSSTransition
                key={item.id}
                classNames="fade"
                timeout={{ enter: 500, exit: 0, appear: 500 }}
              >
                <Trending.Item>
                  <Trending.Inner>
                    <Trending.Poster src={item.poster_path} />
                    <Trending.Info>
                      <Trending.Name>
                        {item.title || item.name || item.orinal_title}
                      </Trending.Name>
                      <Trending.Date>
                        {getYearFromString(
                          item.release_date || item.first_air_date,
                        )}
                      </Trending.Date>
                    </Trending.Info>
                  </Trending.Inner>
                  <Trending.Rating>{item.vote_average}</Trending.Rating>
                </Trending.Item>
              </CSSTransition>
            );
          })}
      </Trending.List>
      <PaginationContainer />
    </Trending>
  );
}