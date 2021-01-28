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
              selected={activeType === item.id ? 1 : 0}
              onClick={() => setActiveType(item.id)}
              key={item.id}
              side={item.side}
            >
              {item.name}
            </Tab.Anchor>
          );
        })}
      </Tab.Selector>
    </Tab>
  );
}
