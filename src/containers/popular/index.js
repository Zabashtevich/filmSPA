import React, { useState } from "react";
import { TabsContainer } from "..";
import { Popular } from "../../components";
import { useFetch } from "../../hooks";

export default function PopularContainer({ tabs }) {
  const [activeTab, setActiveTab] = useState("popular");
  const [data, dataLoading] = useFetch(tabs.type, activeTab);
  console.log(data, dataLoading);
  return (
    <Popular>
      <TabsContainer
        tabs={tabs}
        setActiveTab={setActiveTab}
        active={activeTab}
      />
      <Popular.Container>
        {!dataLoading &&
          data.results.map((item) => (
            <Popular.Item>
              <Popular.Poster />
              <Popular.Description>
                <Popular.Row>
                  <Popular.Title></Popular.Title>
                  <Popular.Average></Popular.Average>
                </Popular.Row>
                <Popular.Row>
                  <Popular.Year></Popular.Year>
                  <Popular.Count></Popular.Count>
                </Popular.Row>
              </Popular.Description>
            </Popular.Item>
          ))}
      </Popular.Container>
    </Popular>
  );
}
