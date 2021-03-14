import React, { useState } from "react";

import { Tabs } from "../../components";

export default function TabsContainer({ tabs, setActiveTab }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Tabs>
      {tabs.map((item, index) => (
        <Tabs.Anchor
          key={item}
          onClick={() => {
            setActiveTab(index);
            setActiveIndex(index);
          }}
          direction={
            index === 0 ? "left" : index === tabs.length - 1 ? "right" : 0
          }
          active={index === activeIndex && 1}
        >
          <Tabs.Title>{item.toUpperCase()}</Tabs.Title>
        </Tabs.Anchor>
      ))}
    </Tabs>
  );
}
