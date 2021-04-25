import React, { useState } from "react";

import { Userlist } from "../../components";

export default function UserlistContainer() {
  function dropHandler(e) {
    console.log(e);
    e.preventDefault();
    console.log(e.dataTransfer.getData("id"));
  }

  function dragOverHandler(e) {
    e.preventDefault();
    console.log(e);
  }

  function dragLeaveHandler(e) {
    console.log("end");
  }

  function dragEndHandler() {
    console.log("stop");
  }

  return (
    <Userlist>
      <Userlist.Header>
        <Userlist.Dropzone
          onDrop={dropHandler}
          onDragOver={dragOverHandler}
          onDragLeave={dragLeaveHandler}
          onDragEnd={dragEndHandler}
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
