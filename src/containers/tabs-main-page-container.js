import React from "react";
import { Tab } from "../components";
import { anchorListPeriod, anchorListType } from "../constants/constants";

export default function TabsMainPageCotainer({
  typeTabByPopular,
  tabListType,
  setTabListTypeActive,
  setTypeTabByPopularActive,
}) {
  return (
    <Tab.Wrapper>
      <Tab>
        <Tab.Title>Popular by:</Tab.Title>
        <Tab.Selector>
          {anchorListPeriod.map((item) => {
            return (
              <Tab.Anchor
                selected={typeTabByPopular === item.id ? true : false}
                onClick={() => setTypeTabByPopularActive(item.id)}
                side={item.side}
                key={item.name}
              >
                {item.name}
              </Tab.Anchor>
            );
          })}
        </Tab.Selector>
      </Tab>
      <Tab>
        <Tab.Title>List type:</Tab.Title>
        <Tab.Selector>
          {anchorListType.map((item) => {
            return (
              <Tab.Anchor
                key={item.name}
                side={item.side}
                selected={tabListType === item.id ? true : false}
                onClick={() => setTabListTypeActive(item.id)}
              >
                {item.name}
              </Tab.Anchor>
            );
          })}
        </Tab.Selector>
      </Tab>
    </Tab.Wrapper>
  );
}
