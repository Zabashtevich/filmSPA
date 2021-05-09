import React from "react";
import ContentLoader from "react-content-loader";

import { Wrapper } from "./styles/details-panel";

export function DetailsCollectionSkeleton() {
  return (
    <Wrapper>
      <ContentLoader
        speed={2}
        width={1300}
        height={300}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        data-testid="details-collection-skeleton"
      >
        <rect x="0" y="0" rx="10" ry="10" width="1300" height="300" />
      </ContentLoader>
    </Wrapper>
  );
}
