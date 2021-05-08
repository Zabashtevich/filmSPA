import React from "react";
import ContentLoader from "react-content-loader";

import { Wrapper } from "./styles/media";

export function MediaSkeleton() {
  return (
    <Wrapper>
      <ContentLoader
        speed={2}
        width={200}
        height={300}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="5" ry="5" width="200" height="300" />
      </ContentLoader>
    </Wrapper>
  );
}
