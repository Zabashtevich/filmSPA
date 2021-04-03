import React, { useState } from "react";

import { useUserlistContext } from "./../../context";
import { Menu } from "../../components";
import { useSelector } from "react-redux";

export default function MenuContainer() {
  const [visible, setVisible] = useState(true);
  const [, setActive] = useUserlistContext();

  function onCategoryClick(category, userlistID = null) {
    setActive({ type: category, userlist: userlistID });
    setVisible(false);
  }

  const { userDataLoading, userlists } = useSelector((state) => state.userData);

  return (
    <Menu visible={visible && 1}>
      <Menu.Title>MENU</Menu.Title>
      <Menu.Wrapper>
        <Menu.Section>
          <Menu.Row>
            <Menu.Category>DEFAULT</Menu.Category>
            <Menu.Default />
          </Menu.Row>
          <Menu.Item onClick={() => onCategoryClick("favorite")}>
            <Menu.Subtitle>Favorite</Menu.Subtitle>
          </Menu.Item>
        </Menu.Section>
        <Menu.Section>
          <Menu.Row>
            <Menu.Category>Userlists</Menu.Category>
            <Menu.Userlist />
          </Menu.Row>
          <Menu.Item onClick={() => onCategoryClick("userlist", "id")}>
            <Menu.Subtitle>Hahah</Menu.Subtitle>
            <Menu.Edit />
          </Menu.Item>
          <Menu.Item>
            <Menu.Subtitle>Hahah</Menu.Subtitle>
            <Menu.Edit />
          </Menu.Item>
        </Menu.Section>
        <Menu.Section>
          <Menu.Create onClick={() => onCategoryClick("create")}>
            <Menu.Category type="create list">Create new list</Menu.Category>
            <Menu.Plus />
          </Menu.Create>
        </Menu.Section>
        <Menu.Section>
          <Menu.Row>
            <Menu.Category>Links</Menu.Category>
            <Menu.Links />
          </Menu.Row>
          <Menu.Row>
            <Menu.Link to="/account">Return to account</Menu.Link>
            <Menu.Circle />
          </Menu.Row>
          <Menu.Row>
            <Menu.Link to="/">Go to main page</Menu.Link>
            <Menu.Circle />
          </Menu.Row>
        </Menu.Section>
      </Menu.Wrapper>
      <Menu.Arrow onClick={() => setVisible((prev) => !prev)} />
    </Menu>
  );
}
