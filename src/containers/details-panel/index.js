import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { DetailsPanel } from "./../../components";
import { MediaContainer } from "./../";
import { useFetch } from "../../hooks";
import DetailsPanelRating from "./items/details-panel-rating";
import DetailsPanelCollection from "./items/details-panel-collection";
import MediaSkeleton, {
  DetailsCollectionSkeleton,
} from "../../components/skeleton";

export default function DetailsPanelContainer() {
  const [{ collectionDelay, mediaDelay }, setDelay] = useState({
    collectionDelay: true,
    mediaDelay: true,
  });
  const { direction, slug } = useParams();

  const [data, loading] = useFetch(direction, slug);

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
      <DetailsPanel.Section>
        <DetailsPanelRating />
      </DetailsPanel.Section>
    </DetailsPanel>
  );
}
