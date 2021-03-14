import React, { useState } from "react";
import { TabsContainer } from "..";

import { Trending } from "../../components";
import { getYearFromString } from "../../utils";
import { useFetch } from "./../../hooks";

export default function TrendingContainer() {
  const [data, dataLoading] = useFetch("tv", 0, 1);
  console.log(data);
  return (
    <Trending>
      <Trending.Wrapper>
        <TabsContainer tabs={["all", "movie", "tv"]} />
        <Trending.Title>TRENDING</Trending.Title>
        <TabsContainer tabs={["day", "week"]} />
      </Trending.Wrapper>
      <Trending.List>
        {!dataLoading &&
          data.results.map((item) => {
            console.log(item);
            return (
              <Trending.Item>
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
                  <Trending.Rating>{item.vote_average}</Trending.Rating>
                </Trending.Info>
              </Trending.Item>
            );
          })}
      </Trending.List>
    </Trending>
  );
}
