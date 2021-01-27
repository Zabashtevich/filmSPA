import React from "react";
import { Tab } from "../components";

export default function TabContainer({
  title,
  tabList,
  setActiveType,
  activeType,
}) {
  return (
    <Tab>
      <Tab.Title>{title}</Tab.Title>
      <Tab.Selector>
        {tabList.map((item) => {
          return (
            <Tab.Anchor
              selected={activeType === item.name ? 1 : 0}
              onClick={() => setActiveType(item.name)}
              key={item.name}
            >
              {item.name}
            </Tab.Anchor>
          );
        })}
      </Tab.Selector>
    </Tab>
  );
}
