import React from "react";

import { CollectionCastSkeleton } from "./../../../skeletons";

export default function CollectionCardSkeleton() {
  return (
    <CollectionCastSkeleton data-testid="collection-cast-skeleton">
      <CollectionCastSkeleton.Poster />
      <CollectionCastSkeleton.Info />
    </CollectionCastSkeleton>
  );
}
