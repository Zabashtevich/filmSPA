import React, { useEffect, useState } from "react";

import { useUserlistContext } from "./../../context";
import { Menu } from "../../components";
import { useSelector } from "react-redux";

export default function MenuContainer() {
  const [visible, setVisible] = useState(false);
  const { userlists } = useSelector((state) => state.userData);
  const [{ type, userlist }, setActive] = useUserlistContext();

  function onCategoryClick(category, userlistID = null) {
    setActive({ type: category, userlist: userlistID });
  }

  const { userDataLoading } = useSelector((state) => state.userData);

  useEffect(() => {
    if (!userDataLoading) {
      setVisible(true);
    }
  }, [userDataLoading]);

  return (
    <Menu visible={visible && 1} data-testid="menu-container">
      <Menu.Wrapper>
        <Menu.Title>MENU</Menu.Title>
        <Menu.Section>
          <Menu.Row>
            <Menu.Category>DEFAULT</Menu.Category>
            <Menu.Default />
          </Menu.Row>
          <Menu.Item
            onClick={() => onCategoryClick("favorite")}
            selected={type === "favorite" && 1}
            data-testid="favorite"
          >
            {!userDataLoading && <Menu.Subtitle>Favorite</Menu.Subtitle>}
          </Menu.Item>
        </Menu.Section>
        <Menu.Section>
          <Menu.Row>
            <Menu.Category>Userlists</Menu.Category>
            <Menu.Userlist />
          </Menu.Row>
          <Menu.List data-testid="userlists">
            {!userDataLoading &&
              userlists.map(({ id, name }) => (
                <Menu.Item
                  onClick={() => onCategoryClick("userlist", id)}
                  selected={userlist === id && 1}
                  key={id}
                >
                  <Menu.Subtitle>{name}</Menu.Subtitle>
                  <Menu.Edit />
                </Menu.Item>
              ))}
          </Menu.List>
        </Menu.Section>
        <Menu.Section>
          <Menu.Create
            onClick={() => onCategoryClick("createList")}
            selected={type === "createList" && 1}
          >
            <Menu.Category type="createList">Create new list</Menu.Category>
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
