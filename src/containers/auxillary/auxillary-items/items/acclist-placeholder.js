import React from "react";

import { AcclistCreateItem } from "../../../../components";

export default function AccountListPlaceholder() {
  return (
    <AcclistCreateItem>
      <AcclistCreateItem.Placeholder>
        You do not have <br />
        any lists
      </AcclistCreateItem.Placeholder>
    </AcclistCreateItem>
  );
}
