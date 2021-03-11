import React from "react";

import { range } from "./../../utils";
import { DetailsPanel } from "../../components";

export default function DetailsPanelContainer() {
  return (
    <DetailsPanel>
      <DetailsPanel.Title>Rating</DetailsPanel.Title>
      <DetailsPanel.Section>
        {range(1, 10).map((item) => (
          <DetailsPanel.Star key={item} />
        ))}
        <DetailsPanel.Rating>
          <DetailsPanel.Wrapper>
            <DetailsPanel.Subtitle></DetailsPanel.Subtitle>
            <DetailsPanel.Value></DetailsPanel.Value>
          </DetailsPanel.Wrapper>
          <DetailsPanel.Wrapper>
            <DetailsPanel.Delete></DetailsPanel.Delete>
            <DetailsPanel.Date></DetailsPanel.Date>
          </DetailsPanel.Wrapper>
        </DetailsPanel.Rating>
      </DetailsPanel.Section>
    </DetailsPanel>
  );
}
