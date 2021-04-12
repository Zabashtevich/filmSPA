import React, { useState } from "react";
import { TabsContainer } from "..";
import { Popular } from "../../components";
import { useFetch } from "../../hooks";
import { getYearFromString } from "../../utils";

export default function PopularContainer({ tabs }) {
  const [scrollvalue, setScrollvalue] = useState(0);
  const [activeTab, setActiveTab] = useState("popular");
  const [data, dataLoading] = useFetch(tabs.type, activeTab);

  return (
    <Popular>
      <TabsContainer
        tabs={tabs}
        setActiveTab={setActiveTab}
        active={activeTab}
      />
      <Popular.Container
        onScroll={(e) => setScrollvalue(e.target.scrollLeft)}
        disabled={scrollvalue !== 0 && 1}
      >
        {!dataLoading &&
          data.results.map((item) => {
            console.log(item);
            return (
              <Popular.Item>
                <Popular.Poster slug={item.poster_path} />
                <Popular.Description>
                  <Popular.Row>
                    <Popular.Title>{item.title || item.name}</Popular.Title>
                    <Popular.Average value={item.vote_average}>
                      {item.vote_average}
                    </Popular.Average>
                  </Popular.Row>
                  <Popular.Row>
                    <Popular.Year>
                      {getYearFromString(item.release_date)}
                    </Popular.Year>
                    <Popular.Count>{item.vote_count}</Popular.Count>
                  </Popular.Row>
                </Popular.Description>
              </Popular.Item>
            );
          })}
      </Popular.Container>
    </Popular>
  );
}
