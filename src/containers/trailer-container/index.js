import React from "react";
import { createPortal } from "react-dom";

import { Trailer } from "../../components";
import { w300miniature } from "../../constants/constants";
import TrailerPopup from "./items/trailer-popup";

export default function TrailerContainer({ list }) {
  return (
    <Trailer>
      <Trailer.Thumbnail src={`${w300miniature + list.backdrop_path}`} />
      <Trailer.Icon />
      {createPortal(<TrailerPopup />, document.getElementById("root"))}
    </Trailer>
  );
}
