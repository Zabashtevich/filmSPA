import React from "react";
import { DetailsPanel } from "../../../components";

export default function DetailsPanelCollection({ collection }) {
  return (
    <>
      <DetailsPanel.Title>Collection</DetailsPanel.Title>
      <DetailsPanel.Section>
        <DetailsPanel.Inner>
          <DetailsPanel.Poster src={collection.backdrop_path} />
          <DetailsPanel.Description>
            <DetailsPanel.Collectionname>{`Part of the  ${collection.name}`}</DetailsPanel.Collectionname>
            <DetailsPanel.Link to={`/collection/${collection.name}`}>
              WATCH COLLECTION
            </DetailsPanel.Link>
          </DetailsPanel.Description>
        </DetailsPanel.Inner>
      </DetailsPanel.Section>
    </>
  );
}
