import React from "react";

import { GallerySkeleton } from "../../../skeletons";

export default function GalleryHeaderSkeleton() {
  return (
    <>
      <GallerySkeleton.Thumbnail />
      <GallerySkeleton.Title />
    </>
  );
}
