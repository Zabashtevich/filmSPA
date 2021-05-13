import React from "react";

import { CollectionPartsSkeleton } from "../../../skeletons";

export default function PartSkeleton() {
  return (
    <CollectionPartsSkeleton>
      <CollectionPartsSkeleton.Poster />
      <CollectionPartsSkeleton.Info />
    </CollectionPartsSkeleton>
  );
}
