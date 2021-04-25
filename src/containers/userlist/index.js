import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import { Userlist } from "../../components";
import { useDragContext } from "../../context";
import UserlistDropzone from "./items/userlist-dropzone";

export default function UserlistContainer() {
  const [{ type }] = useDragContext();

  return (
    <Userlist>
      <SwitchTransition mode={"out-in"}>
        <CSSTransition key={type} classNames="fade" timeout={500}>
          <Userlist.Header>
            {type === "dropzone" && <UserlistDropzone />}
          </Userlist.Header>
        </CSSTransition>
      </SwitchTransition>
    </Userlist>
  );
}
