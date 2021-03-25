import React, { useEffect } from "react";
import { createPortal } from "react-dom";

import { Popup } from "../../components";
import { usePopupContext } from "../../context";

export default function PopupContainer() {
  const [{ visible, type, item }, setPopupProps] = usePopupContext();

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [visible]);

  return (
    visible &&
    createPortal(
      <Popup
        onClick={() =>
          setPopupProps({ visible: false, item: null, type: null })
        }
        allowfullscreen="allowfullscreen"
      >
        <Popup.Close />
        {type === "video" && (
          <Popup.Video
            width="1280"
            height="720"
            src={`https://www.youtube.com/embed/${item.key}`}
            title="YouTube video player"
            frameborder="0"
            allowfullscreen={true}
          />
        )}
        {type === "image" && <Popup.Image slug={item.file_path} />}
      </Popup>,
      document.getElementById("root"),
    )
  );
}
