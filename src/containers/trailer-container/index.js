import React from "react";
import { createPortal } from "react-dom";

import { Trailer } from "../../components";
import TrailerPopup from "./items/trailer-popup";

export default function TrailerContainer({ videos }) {
  console.log(videos);
  return (
    <Trailer url={`http://i3.ytimg.com/vi/${videos[0].key}/mqdefault.jpg`}>
      <Trailer.Icon />
      {createPortal(<TrailerPopup />, document.getElementById("root"))}
    </Trailer>
  );
}
