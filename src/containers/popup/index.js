import React from "react";
import { createPortal } from "react-dom";

import { Popup } from "../../components";

export default function PopupContainer({ type, slug }) {
  return (
    type &&
    createPortal(
      <Popup>
        <Popup.Close />
        {type === "Video" && <Popup.Video />}
        {type === "Image" && <Popup.Image />}
      </Popup>,
      document.getElementById("root"),
    )
  );
}
