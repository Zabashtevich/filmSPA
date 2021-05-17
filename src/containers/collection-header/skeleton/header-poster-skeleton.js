import React from "react";

import { CollectionHeaderSkeleton } from "../../../skeletons";

export default function HeaderPosterSkeleton() {
  return (
    <>
      <CollectionHeaderSkeleton.Poster data-testid="collection-header-skeleton" />
      <CollectionHeaderSkeleton.Wrapper>
        <CollectionHeaderSkeleton.Title />
        <CollectionHeaderSkeleton.Subtitle />
        <CollectionHeaderSkeleton.Overview />
        <CollectionHeaderSkeleton.Row />
        <CollectionHeaderSkeleton.Row />
      </CollectionHeaderSkeleton.Wrapper>
    </>
  );
}
