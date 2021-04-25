import React from "react";
import { Userlist } from "../../components";

export default function UserlistContainer() {
  return (
    <Userlist>
      <Userlist.Header>
        <Userlist.Dropzone>
          <Userlist.Dropicon />
          <Userlist.Placeholder>
            Move one of your lists here
          </Userlist.Placeholder>
        </Userlist.Dropzone>
      </Userlist.Header>
    </Userlist>
  );
}
