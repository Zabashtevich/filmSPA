import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import CreateList from "./items/create-list";
import Edit from "./items/edit";
import List from "./items/list";

import { useUserlistContext } from "./../../context";
import { Userlist } from "../../components";

export default function UserlistContainer() {
  const [{ value, type }] = useUserlistContext();

  return (
    <Userlist>
      <SwitchTransition mode="out-in">
        <CSSTransition key={value} classNames="fade" timeout={500}>
          <Userlist.Inner>
            {type === "userlist" && <List userlist={value} />}
            {type === "createList" && <CreateList />}
            {type === "editList" && <Edit />}
          </Userlist.Inner>
        </CSSTransition>
      </SwitchTransition>
    </Userlist>
  );
}
