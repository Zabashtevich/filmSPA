import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import { Userlist } from "../../components";
import { useDragContext } from "../../context";
import UserlistDropzone from "./items/userlist-dropzone";
import UserlistList from "./items/userlist-list";

export default function UserlistContainer() {
  const [{ type, hovered, list }, setDragProps] = useDragContext();

  return (
    <Userlist>
      <SwitchTransition mode={"out-in"}>
        <CSSTransition key={type} classNames="fade" timeout={500}>
          <Userlist.Header>
            {type === "dropzone" && (
              <UserlistDropzone setDragProps={setDragProps} hovered={hovered} />
            )}
            {type === "userlist" && <UserlistList list={list} />}
          </Userlist.Header>
        </CSSTransition>
      </SwitchTransition>
    </Userlist>
  );
}
