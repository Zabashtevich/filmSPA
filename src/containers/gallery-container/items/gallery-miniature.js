import React, { useState } from "react";

import { Gallery } from "../../../components";
import { GalleryMiniatureSkeleton } from "../../../components/skeleton";
import { useGalleryContext } from "../../../context";

export default function GalleryMiniature({ file_path }) {
  const [{ url }, { setUrl }] = useGalleryContext();
  const [loading, setLoading] = useState(true);

  return (
    <Gallery.Inner>
      <GalleryMiniatureSkeleton visible={loading} />
      <Gallery.Miniature
        src={file_path}
        onClick={() => setUrl(file_path)}
        selected={url === file_path && 1}
        onLoad={() => setLoading(false)}
      />
    </Gallery.Inner>
  );
}
