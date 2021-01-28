import React, { useState, useEffect } from "react";

import { AccountPanel } from "../components";
import TabContainer from "./tab-container";

export default function AccountPanelContainer() {
  const [tabFirst, setTabFirst] = useState({
    tabList: [],
    activeType: 0,
    title: "Sort by list:",
  });
  const [tabSecondary, setTabSecondary] = useState({
    tabList: [],
    activeType: 0,
    title: "Sort by list:",
  });

  useEffect(() => {
    if (!loadingData) {
      setTabFirst((prev) => ({
        ...prev,
        tabList: [{ name: "voices" }, ...data],
      }));
    }
  }, [loadingData]);

  return (
    <AccountPanel>
      <TabContainer
        title={tabFirst.title}
        tabList={tabFirst.tabList}
        setActiveType={setTabFirst}
        activeType={tabFirst.activeType}
      />

      <TabContainer
        title={tabSecondary.title}
        tabList={tabSecondary.tabList}
        setActiveType={setTabSecondary}
        activeType={tabSecondary.activeType}
      />
    </AccountPanel>
  );
}
