import React from "react";

import { Poster } from "./styles/trending";

export default function TrendingSkeleton({ ...rest }) {
  return <Poster {...rest} data-testid="trending-skeleton" />;
}
