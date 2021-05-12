import React from "react";

import { Poster } from "./styles/collection-header";

export default function CollectionHeaderSkeleton({ children }) {
  return children;
}

CollectionHeaderSkeleton.Poster = function CollectionHeaderSkeleton() {
  return <Poster />;
};
