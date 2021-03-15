import React, { useState } from "react";
import { TabsContainer } from "..";

import { Trending } from "../../components";
import { getYearFromString } from "../../utils";
import { useFetch } from "./../../hooks";

export default function TrendingContainer() {
  const [type, setType] = useState("all");
  const [activeTab, setActiveTab] = useState(0);
  const [data, dataLoading] = useFetch(type, activeTab, 1);
  console.log(activeTab, type);
  return (
    <Trending>
      <Trending.Wrapper>
        <TabsContainer
          tabs={[
            { name: "all", value: "all" },
            { name: "movie", value: "movie" },
            { name: "tv", value: "tv" },
          ]}
          setActiveTab={setType}
        />
        <Trending.Title>TRENDING</Trending.Title>
        <TabsContainer
          tabs={[
            { name: "day", value: "day" },
            { name: "week", value: "week" },
          ]}
          setActiveTab={setActiveTab}
        />
      </Trending.Wrapper>
      <Trending.List>
        {!dataLoading &&
          data.results.map((item) => {
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
                </Trending.Info>
                <Trending.Rating>{item.vote_average}</Trending.Rating>
              </Trending.Item>
            );
          })}
      </Trending.List>
    </Trending>
  );
}
