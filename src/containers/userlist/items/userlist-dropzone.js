import React from "react";

import { useDragContext } from "../../../context";
import { Userlist } from "../../../components";

export default function UserlistDropzone() {
  const [{ hovered }, setDragProps] = useDragContext();

  function dropHandler(e) {
    e.preventDefault();
    setDragProps((prev) => ({ ...prev, type: "userlist" }));
  }

  function dragOverHandler(e) {
    e.preventDefault();
    setDragProps((prev) => ({ ...prev, hovered: true }));
  }

  function dragLeaverHandler() {
    setDragProps((prev) => ({ ...prev, hovered: false }));
  }

  return (
    <Userlist.Dropzone
      onDrop={dropHandler}
      onDragOver={dragOverHandler}
      onDragLeave={dragLeaverHandler}
      hovered={hovered}
    >
      <Userlist.Dropicon />
      <Userlist.Placeholder>Move one of your lists here</Userlist.Placeholder>
    </Userlist.Dropzone>
  );
}
