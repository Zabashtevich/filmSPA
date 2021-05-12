import React from "react";

import { CollectionCastSkeleton } from "./../../../skeletons";

export default function CollectionCardSkeleton() {
  return (
    <CollectionCastSkeleton>
      <CollectionCastSkeleton.Poster />
      <CollectionCastSkeleton.Info />
    </CollectionCastSkeleton>
  );
}
