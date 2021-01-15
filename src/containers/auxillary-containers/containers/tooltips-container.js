import React from "react";
import { Tooltips } from "../../../components";

export default function TooltipsContainer() {
  return (
    <Tooltips>
      <Tooltips.ItemWrapper>
        <Tooltips.Watchlist />
      </Tooltips.ItemWrapper>
      <Tooltips.ItemWrapper>
        <Tooltips.Favorite />
      </Tooltips.ItemWrapper>
    </Tooltips>
  );
}
