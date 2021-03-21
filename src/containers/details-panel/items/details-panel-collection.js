import React from "react";
import { DetailsPanel } from "../../../components";

export default function DetailsPanelCollection({ collection }) {
  console.log(collection);
  return (
    <DetailsPanel.Collection src={collection.backdrop_path}>
      <DetailsPanel.Info>
        <DetailsPanel.Subtitle>{`Belongs to ${collection.name}`}</DetailsPanel.Subtitle>
        <DetailsPanel.Button to={`/collection/${collection.id}`}>
          WATCH COLLECTION
        </DetailsPanel.Button>
      </DetailsPanel.Info>
    </DetailsPanel.Collection>
  );
}
