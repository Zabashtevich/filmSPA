import React, { useState } from "react";
import { useParams } from "react-router";

import { DetailsPanel } from "./../../components";
import { MediaContainer, ReviewContainer } from "./../";
import { useFetch } from "../../hooks";
import MediaSkeleton, {
  DetailsCollectionSkeleton,
} from "../../components/skeleton";
import DetailsPanelRating from "./items/details-panel-rating";
import DetailsPanelCollection from "./items/details-panel-collection";

export default function DetailsPanelContainer() {
  const [{ collectionDelay, mediaDelay }, setDelay] = useState({
    collectionDelay: true,
    mediaDelay: true,
  });
  const { direction, slug } = useParams();

  const [data, loading] = useFetch("details", direction, slug);

  const collection = data?.belongs_to_collection;

  return (
    <DetailsPanel>
      <DetailsPanel.Section
        visible={loading}
        onexited={() => setDelay((prev) => ({ ...prev, mediaDelay: false }))}
      >
        <MediaSkeleton />
      </DetailsPanel.Section>
      <DetailsPanel.Section visible={!loading && !mediaDelay}>
        <MediaContainer data={data} loading={loading} />
      </DetailsPanel.Section>
      <DetailsPanel.Section
        visible={loading}
        onexited={() =>
          setDelay((prev) => ({ ...prev, collectionDelay: false }))
        }
      >
        <DetailsCollectionSkeleton />
      </DetailsPanel.Section>
      <DetailsPanel.Section
        visible={!loading && !collectionDelay && !!collection}
      >
        <DetailsPanelCollection collection={collection} />
      </DetailsPanel.Section>
      <DetailsPanel.Section visible={!loading}>
        <DetailsPanel.Title>Rating</DetailsPanel.Title>
        <DetailsPanelRating data={data} />
      </DetailsPanel.Section>
      <DetailsPanel.Section visible={true}>
        <ReviewContainer data={data} loading={loading} />
      </DetailsPanel.Section>
    </DetailsPanel>
  );
}
