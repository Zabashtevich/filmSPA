import React from "react";

import { Tabs } from "../../components";

export default function TabsContainer({ tabs, setActiveTab }) {
  return (
    <Tabs>
      {tabs.map(({ name, value }) => {
        console.log(name, value);
        return (
          <Tabs.Anchor key={value} onClick={() => setActiveTab(value)}>
            <Tabs.Title>{name}</Tabs.Title>
          </Tabs.Anchor>
        );
      })}
    </Tabs>
  );
}
