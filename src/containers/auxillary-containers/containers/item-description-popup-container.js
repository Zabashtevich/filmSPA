import React from "react";

import { ItemDescriptionPopup } from "../../../components";

export default function ItemDescriptionPopupContainer({ text }) {
  return (
    <ItemDescriptionPopup>
      <ItemDescriptionPopup.Message>{text}</ItemDescriptionPopup.Message>
    </ItemDescriptionPopup>
  );
}
