import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import { useDragContext } from "./../../context";
import { Menu } from "../../components";
import { MenuSkeleton } from "../../components/skeleton";
import { range } from "./../../utils";

export default function MenuContainer({ lists, loading }) {
  const [{ list }, setDragProps] = useDragContext();
  const [visible, setVisible] = useState(true);

  function dragStartHandler(list) {
    setDragProps((prev) => ({ ...prev, list }));
  }

  function dragEndHandler() {
    setDragProps((prev) => ({ ...prev, hovered: false }));
  }

  return (
    <Menu>
      <Menu.Container visible={visible} data-testid="menu-container">
        <Menu.Title>MENU</Menu.Title>
        <Menu.Subtitle>Your lists:</Menu.Subtitle>
        <SwitchTransition mode={"out-in"}>
          <CSSTransition key={loading} classNames="fade" timeout={500}>
            <Menu.List>
              {loading &&
                range(1, 3).map((item) => <MenuSkeleton key={item} />)}
              {!loading &&
                lists.userlists.map((item) => (
                  <Menu.Item
                    key={item.id}
                    draggable={true}
                    onDragStart={() => dragStartHandler(item)}
                    onDragEnd={dragEndHandler}
                  >
                    <Menu.Thumbnail />
                    <Menu.Name>{item.name}</Menu.Name>
                  </Menu.Item>
                ))}
            </Menu.List>
          </CSSTransition>
        </SwitchTransition>
        <Menu.Footer>
          <Menu.Link to="/">go to Main page</Menu.Link>
          <Menu.Link to="/account">go to Account page</Menu.Link>
        </Menu.Footer>
        <Menu.Arrow
          onClick={() => setVisible((prev) => !prev)}
          data-testid="menu-arrow"
        />
      </Menu.Container>
    </Menu>
  );
}
