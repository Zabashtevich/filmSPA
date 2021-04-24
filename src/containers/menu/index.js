import React from "react";
import { Menu } from "../../components";

export default function MenuContainer() {
  return (
    <Menu>
      <Menu.Container>
        <Menu.Title>MENU</Menu.Title>
        <Menu.Subtitle>Your lists:</Menu.Subtitle>
        <Menu.List>
          <Menu.Item>
            <Menu.Thumbnail />
            <Menu.Name></Menu.Name>
          </Menu.Item>
        </Menu.List>
        <Menu.Footer>
          <Menu.Link>go to Main page</Menu.Link>
          <Menu.Link>go to Account page</Menu.Link>
        </Menu.Footer>
      </Menu.Container>
    </Menu>
  );
}
