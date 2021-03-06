import React from "react";

import { Tabs } from "../../components";

export default function TabsContainer({ tabs, setActiveTab, active }) {
  return (
    <Tabs>
      <Tabs.Title>{tabs.type}</Tabs.Title>
      <Tabs.Wrapper>
        {tabs.array.map((item, index) => (
          <Tabs.Item
            tabIndex="0"
            key={item.value}
            onClick={() => setActiveTab(item.value)}
            leftTab={index === 0 && 1}
            rightTab={tabs.array.length === index + 1 && 1}
            active={active === item.value && 1}
          >
            {item.title}
          </Tabs.Item>
        ))}
      </Tabs.Wrapper>
    </Tabs>
  );
}
