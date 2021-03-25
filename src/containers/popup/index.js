import React from "react";
import { createPortal } from "react-dom";

import { Popup } from "../../components";
import { usePopupContext } from "../../context";

export default function PopupContainer() {
  const [{ visible, type, item }, setPopupProps] = usePopupContext();
  return (
    visible &&
    createPortal(
      <Popup>
        <Popup.Close />
        {type === "Video" && <Popup.Video />}
        {type === "Image" && (
          <Popup.Image
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6UJGYjtmNvg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        )}
      </Popup>,
      document.getElementById("root"),
    )
  );
}
