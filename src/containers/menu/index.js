import React, { useState } from "react";

import { Menu } from "../../components";

export default function MenuContainer() {
  const [visible, setVisible] = useState(true);

  return (
    <Menu visible={visible && 1}>
      <Menu.Title>MENU</Menu.Title>
      <Menu.Wrapper>
        <Menu.Section>
          <Menu.Row>
            <Menu.Category>DEFAULT</Menu.Category>
            <Menu.Default />
          </Menu.Row>
          <Menu.Item>
            <Menu.Subtitle>Favorite</Menu.Subtitle>
          </Menu.Item>
        </Menu.Section>
        <Menu.Section>
          <Menu.Row>
            <Menu.Category>Userlists</Menu.Category>
            <Menu.Userlist />
          </Menu.Row>
          <Menu.Item>
            <Menu.Subtitle>Hahah</Menu.Subtitle>
            <Menu.Edit />
          </Menu.Item>
          <Menu.Item>
            <Menu.Subtitle>Hahah</Menu.Subtitle>
            <Menu.Edit />
          </Menu.Item>
        </Menu.Section>
        <Menu.Section>
          <Menu.Create>
            <Menu.Subtitle>Create new list</Menu.Subtitle>
            <Menu.Plus />
          </Menu.Create>
        </Menu.Section>
        <Menu.Section>
          <Menu.Row>
            <Menu.Category>Links</Menu.Category>
            <Menu.Links />
          </Menu.Row>
          <Menu.Row>
            <Menu.Link>return to account</Menu.Link>
            <Menu.Circle />
          </Menu.Row>
          <Menu.Row>
            <Menu.Link>go to main page</Menu.Link>
            <Menu.Circle />
          </Menu.Row>
        </Menu.Section>
      </Menu.Wrapper>
      <Menu.Arrow onClick={() => setVisible((prev) => !prev)} />
    </Menu>
  );
}
