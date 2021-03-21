import React from "react";
import { useParams } from "react-router";

import { DetailsPanel } from "./../../components";
import { MediaContainer } from "./../";
import { useFetch } from "../../hooks";

export default function DetailsPanelContainer() {
  const { direction, slug } = useParams();

  const [data, loading] = useFetch(direction, slug);

  return (
    <DetailsPanel>
      <DetailsPanel.Section>
        <MediaContainer />
      </DetailsPanel.Section>
      <DetailsPanel.Section>
        <DetailsPanel.Collection>
          <DetailsPanel.Thumbnail />
          <DetailsPanel.Info>
            <DetailsPanel.Subtitle></DetailsPanel.Subtitle>
            <DetailsPanel.Button></DetailsPanel.Button>
          </DetailsPanel.Info>
        </DetailsPanel.Collection>
      </DetailsPanel.Section>
    </DetailsPanel>
  );
}
