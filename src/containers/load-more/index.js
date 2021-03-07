import React from "react";

import { LoadMore } from "../../components";

export default function LoadMoreContainer({ setItemsCount, visible, offset }) {
  return (
    <LoadMore visible={visible}>
      <LoadMore.Wrapper>
        <LoadMore.Button onClick={() => setItemsCount((prev) => prev + offset)}>
          Load more
        </LoadMore.Button>
      </LoadMore.Wrapper>
    </LoadMore>
  );
}
