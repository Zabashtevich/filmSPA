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
        {tabList.map((item, i) => {
          return (
            <Tab.Anchor
              selected={activeType === i ? 1 : 0}
              onClick={() =>
                setActiveType((prev) => ({ ...prev, activeType: i }))
              }
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
