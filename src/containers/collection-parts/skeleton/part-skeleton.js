import React from "react";

import { CollectionPartsSkeleton } from "../../../skeletons";

export default function PartSkeleton() {
  return (
    <CollectionPartsSkeleton data-testid="collection-parts-skeleton">
      <CollectionPartsSkeleton.Poster />
      <CollectionPartsSkeleton.Info />
    </CollectionPartsSkeleton>
  );
}
