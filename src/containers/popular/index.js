import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import PopularSkeletonItem from "./skeleton/popular-skeleton-item";
import PopularItem from "./items/popular-item";
import { TabsContainer } from "..";
import { Popular } from "../../components";
import { useFetch } from "../../hooks";
import { range } from "../../utils";

export default function PopularContainer({ tabs }) {
  const [scrollvalue, setScrollvalue] = useState(0);
  const [activeTab, setActiveTab] = useState("popular");
  const [data, dataLoading] = useFetch({ type: tabs.type, target: activeTab });

  return (
    <Popular data-testid="popular-container">
      <TabsContainer
        tabs={tabs}
        setActiveTab={setActiveTab}
        active={activeTab}
      />
      <SwitchTransition mode={"out-in"}>
        <CSSTransition key={dataLoading} classNames="fade" timeout={500}>
          <Popular.Container
            onScroll={(e) => setScrollvalue(e.target.scrollLeft)}
            disabled={scrollvalue !== 0 && 1}
          >
            {dataLoading &&
              range(1, 20).map((item) => <PopularSkeletonItem key={item} />)}
            {!dataLoading &&
              data.results.map((item) => {
                return (
                  <PopularItem
                    key={item.id}
                    item={item}
                    direction={tabs.type}
                  />
                );
              })}
          </Popular.Container>
        </CSSTransition>
      </SwitchTransition>
    </Popular>
  );
}
