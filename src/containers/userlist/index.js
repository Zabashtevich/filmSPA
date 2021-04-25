import React, { useState } from "react";

import { Userlist } from "../../components";
import { useDragContext } from "../../context";

export default function UserlistContainer() {
  const [{ hovered, id }, setDragProps] = useDragContext();

  function dropHandler(e) {
    e.preventDefault();
  }

  function dragOverHandler(e) {
    e.preventDefault();
    setDragProps((prev) => ({ ...prev, hovered: true }));
  }

  function dragLeaverHandler() {
    setDragProps((prev) => ({ ...prev, hovered: false }));
  }

  return (
    <Userlist>
      <Userlist.Header>
        <Userlist.Dropzone
          onDrop={dropHandler}
          onDragOver={dragOverHandler}
          onDragLeave={dragLeaverHandler}
          hovered={hovered}
        >
          <Userlist.Dropicon />
          <Userlist.Placeholder>
            Move one of your lists here
          </Userlist.Placeholder>
        </Userlist.Dropzone>
      </Userlist.Header>
    </Userlist>
  );
}
