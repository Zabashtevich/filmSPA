import React from "react";

import { GallerySkeleton } from "../../../skeletons";

export default function GalleryHeaderSkeleton() {
  return (
    <>
      <GallerySkeleton.Thumbnail data-testid="gallery-header-skeleton" />
      <GallerySkeleton.Title />
    </>
  );
}
