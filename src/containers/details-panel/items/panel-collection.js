import React from "react";

import { DetailsPanel } from "../../../components";

export default function PanelCollection({ collection }) {
  return (
    <DetailsPanel.Collection
      src={collection.backdrop_path}
      data-testid="details-collection-container"
      alt="collection thumbnail"
    >
      <DetailsPanel.Info>
        <DetailsPanel.Subtitle>{`Belongs to ${collection.name}`}</DetailsPanel.Subtitle>
        <DetailsPanel.Button
          to={`/collection/${collection.id}`}
          data-testid="collection-button"
        >
          WATCH COLLECTION
        </DetailsPanel.Button>
      </DetailsPanel.Info>
    </DetailsPanel.Collection>
  );
}
