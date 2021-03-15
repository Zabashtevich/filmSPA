import React from "react";

import { Tabs } from "./../../components";

export default function TabsContainer({ tabs = [], setActive, active }) {
  return (
    <Tabs>
      {tabs.map(({ value, title }, index) => {
        const direction =
          index === 0 ? "left" : index === tabs.length - 1 ? "right" : null;
        return (
          <Tabs.Anchor
            key={value}
            onClick={() => setActive(value)}
            active={active === value && 1}
            direction={direction}
          >
            <Tabs.Title>{title.toUpperCase()}</Tabs.Title>
          </Tabs.Anchor>
        );
      })}
    </Tabs>
  );
}
