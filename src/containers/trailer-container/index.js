import React from "react";
import { createPortal } from "react-dom";

import { Trailer } from "../../components";
import { w300miniature } from "../../constants/constants";
import { useItemContext } from "../../context";
import TrailerPopup from "./items/trailer-popup";

export default function TrailerContainer() {
  const [{ item }] = useItemContext();
  return (
    <Trailer>
      <Trailer.Thumbnail
        src={`${w300miniature + item.videos.results.backdrop_path}`}
      />
      <Trailer.Icon />
      {createPortal(<TrailerPopup />, document.getElementById("root"))}
    </Trailer>
  );
}
