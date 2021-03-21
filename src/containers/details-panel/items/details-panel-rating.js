import React from "react";

import { DetailsPanel } from "../../../components";
import { range } from "../../../utils";

export default function DetailsPanelRating() {
  return (
    <DetailsPanel.Subsection>
      <DetailsPanel.Rating>
        {range(1, 10).map((item) => (
          <DetailsPanel.Star key={item} />
        ))}
      </DetailsPanel.Rating>
      <DetailsPanel.Value></DetailsPanel.Value>
      <DetailsPanel.Wrapper>
        <DetailsPanel.Date></DetailsPanel.Date>
        <DetailsPanel.Delete></DetailsPanel.Delete>
      </DetailsPanel.Wrapper>
      <DetailsPanel.Meta>
        <DetailsPanel.Average></DetailsPanel.Average>
        <DetailsPanel.Count></DetailsPanel.Count>
      </DetailsPanel.Meta>
    </DetailsPanel.Subsection>
  );
}
