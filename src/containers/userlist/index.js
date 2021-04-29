import React, { useEffect } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import { Userlist } from "../../components";
import { useCreditsContext, useDragContext } from "../../context";
import UserlistDropzone from "./items/userlist-dropzone";
import UserlistList from "./items/userlist-list";
import { CreditsContainer } from "./../";

export default function UserlistContainer() {
  const [, setCredits] = useCreditsContext();
  const [{ type, hovered, list }, setDragProps] = useDragContext();

  useEffect(() => {
    if (type === "userlist") {
      setCredits({ loading: false, items: list.content });
    }
  }, [type]);

  return (
    <Userlist>
      <SwitchTransition mode={"out-in"}>
        <CSSTransition key={type} classNames="fade" timeout={500}>
          <Userlist.Header>
            {type === "dropzone" && (
              <UserlistDropzone setDragProps={setDragProps} hovered={hovered} />
            )}
            {type === "userlist" && (
              <UserlistList list={list} setDragProps={setDragProps} />
            )}
          </Userlist.Header>
        </CSSTransition>
      </SwitchTransition>
      {type === "userlist" && <CreditsContainer />}
    </Userlist>
  );
}
