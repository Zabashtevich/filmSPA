import React from "react";

import { DetailsPanel } from "../../../components";

export default function PanelCollection({ collection }) {
  return (
    <DetailsPanel.Collection
      src={collection.backdrop_path}
      data-testid="details-collection-container"
    >
      <DetailsPanel.Info>
        <DetailsPanel.Subtitle>{`Belongs to ${collection.name}`}</DetailsPanel.Subtitle>
        <DetailsPanel.Button to={`/collection/${collection.id}`}>
          WATCH COLLECTION
        </DetailsPanel.Button>
      </DetailsPanel.Info>
    </DetailsPanel.Collection>
  );
}
