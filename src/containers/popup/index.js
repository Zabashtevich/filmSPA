import React, { useEffect } from "react";
import { createPortal } from "react-dom";

import { Popup } from "../../components";
import { usePopupContext } from "../../context";

const popupRoot = document.createElement("div");
popupRoot.setAttribute("id", "popup-root");
document.body.appendChild(popupRoot);

export default function PopupContainer() {
  const [{ visible, type, item }, setPopupProps] = usePopupContext();

  const el = document.createElement("div");

  useEffect(() => {
    popupRoot.appendChild(el);
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => popupRoot.removeChild(el);
  }, [visible]);

  return (
    visible &&
    createPortal(
      <Popup
        onClick={() =>
          setPopupProps({ visible: false, item: null, type: null })
        }
        data-testid="popup-container"
      >
        <Popup.Close />
        {type === "video" && (
          <Popup.Inner>
            <Popup.Video
              src={`https://www.youtube.com/embed/${item.key}`}
              title="YouTube video player"
              frameborder="0"
              allowfullscreen={true}
              data-testid="youtube-iframe"
            />
          </Popup.Inner>
        )}
        {type === "image" && (
          <Popup.Image slug={item.file_path} data-testid="popup-img" />
        )}
      </Popup>,
      el,
    )
  );
}
