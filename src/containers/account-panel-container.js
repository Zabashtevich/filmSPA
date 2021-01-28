import React, { useState, useEffect } from "react";

import { AccountPanel } from "../components";
import TabContainer from "./tab-container";
import { RowListItemContainer } from "./auxillary/auxillary-containers";
import useFirestore from "./../hooks/useFirestore";
import useAuthListener from "./../hooks/useAuthListener";

export default function AccountPanelContainer() {
  const { user } = useAuthListener();
  const [loadingData, data] = useFirestore(user.displayName, "collection");
  const [tabFirst, setTabFirst] = useState({
    tabList: [],
    activeType: 0,
    title: "List type:",
  });
  const [tabSecondary, setTabSecondary] = useState({
    tabList: [{ name: "date" }, { name: "rating" }],
    activeType: 0,
    title: "Sort by:",
  });

  const [loadingContent, content] = useFirestore(
    user.displayName,
    "moviesrated",
  );

  console.log(content);

  useEffect(() => {
    if (!loadingData) {
      setTabFirst((prev) => ({
        ...prev,
        tabList: [{ name: "votes" }, ...data],
      }));
    }
  }, [loadingData]);

  return (
    <AccountPanel>
      <AccountPanel.Wrapper tabs={1}>
        <AccountPanel.Inner>
          <TabContainer
            title={tabFirst.title}
            tabList={tabFirst.tabList}
            setActiveType={setTabFirst}
            activeType={tabFirst.activeType}
          />
        </AccountPanel.Inner>
        <AccountPanel.Inner>
          <TabContainer
            title={tabSecondary.title}
            tabList={tabSecondary.tabList}
            setActiveType={setTabSecondary}
            activeType={tabSecondary.activeType}
          />
        </AccountPanel.Inner>
      </AccountPanel.Wrapper>
      <AccountPanel.CardContainer></AccountPanel.CardContainer>
    </AccountPanel>
  );
}
