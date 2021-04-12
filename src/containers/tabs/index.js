import React from "react";

import { Tabs } from "../../components";

export default function TabsContainer({ tabs, setActiveTab, active }) {
  return (
    <Tabs>
      {tabs.map((item, index) => (
        <Tabs.Item
          key={item.value}
          onClick={() => setActiveTab(item.value)}
          leftTab={index === 0 && 1}
          rightTab={tabs.length === index + 1 && 1}
          active={active === item.value && 1}
        >
          {item.title}
        </Tabs.Item>
      ))}
    </Tabs>
  );
}
