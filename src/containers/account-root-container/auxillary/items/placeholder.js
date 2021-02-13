import React from "react";

import { Userlist } from "../../../../components";

export default function UserlistPlaceholder() {
  return (
    <Userlist>
      <Userlist.Placeholder>
        you do not have <br />
        any lists :c
      </Userlist.Placeholder>
    </Userlist>
  );
}
