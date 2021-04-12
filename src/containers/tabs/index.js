import React from "react";

import { Tabs } from "../../components";

export default function TabsContainer({ array, setActiveTab }) {
  return (
    <Tabs>
      <Tabs.Title></Tabs.Title>
      {array.map(({ title, value }, index) => (
        <Tabs.Item
          key={value}
          onClick={() => setActiveTab(value)}
          leftTab={index === 0 && 1}
          rightTab={array.length === index + 1 && 1}
        >
          {title}
        </Tabs.Item>
      ))}
    </Tabs>
  );
}
