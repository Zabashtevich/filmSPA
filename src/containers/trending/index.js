import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { TabsContainer } from "..";

import { Trending } from "../../components";
import { periodType, typeTab } from "../../constants/fixtures";
import { getYearFromString } from "../../utils";
import { useFetch } from "./../../hooks";

export default function TrendingContainer() {
  const [activeType, setActiveType] = useState("all");
  const [activePeriod, setActivePeriod] = useState(0);
  const [{ list, process }, setArray] = useState({ process: true, list: [] });
  const [data, dataLoading] = useFetch(activeType, activePeriod, 1);

  useEffect(() => {
    if (!dataLoading) {
      setArray({ process: false, list: data.results });
    }
  }, [data, dataLoading]);

  console.log(list);
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
        {!process &&
          !dataLoading &&
          list.map((item) => {
            return (
              <CSSTransition key={item.id} classNames="fade" timeout={500}>
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
    </Trending>
  );
}
