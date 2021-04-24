import React from "react";
import { Menu } from "../../components";

export default function MenuContainer({ userlists, loading }) {
  return (
    <Menu>
      <Menu.Container>
        <Menu.Title>MENU</Menu.Title>
        <Menu.Subtitle>Your lists:</Menu.Subtitle>
        <Menu.List>
          {!loading &&
            userlists.map((item) => (
              <Menu.Item key={item.id}>
                <Menu.Thumbnail />
                <Menu.Name>{item.name}</Menu.Name>
              </Menu.Item>
            ))}
        </Menu.List>
        <Menu.Footer>
          <Menu.Link>go to Main page</Menu.Link>
          <Menu.Link>go to Account page</Menu.Link>
        </Menu.Footer>
      </Menu.Container>
    </Menu>
  );
}
