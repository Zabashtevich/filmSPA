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
              key={item.name + i}
              side={
                (i === 0 && "left") || (i === tabList.length - 1 && "right")
              }
            >
              {item.name}
            </Tab.Anchor>
          );
        })}
      </Tab.Selector>
    </Tab>
  );
}
