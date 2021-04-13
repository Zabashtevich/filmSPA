import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import PopularItem from "./items/popular-item";
import { TabsContainer } from "..";
import { Popular } from "../../components";
import { useFetch } from "../../hooks";
import { PopularSkeleton } from "../../components/skeleton";
import { range } from "../../utils";

export default function PopularContainer({ tabs }) {
  const [scrollvalue, setScrollvalue] = useState(0);
  const [activeTab, setActiveTab] = useState("popular");
  const [data, dataLoading] = useFetch(tabs.type, activeTab);

  console.log(data);

  return (
    <Popular>
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
              range(1, 20).map((item) => <PopularSkeleton key={item} />)}
            {!dataLoading &&
              data.results.map((item) => {
                return <PopularItem key={item.id} item={item} />;
              })}
          </Popular.Container>
        </CSSTransition>
      </SwitchTransition>
    </Popular>
  );
}
