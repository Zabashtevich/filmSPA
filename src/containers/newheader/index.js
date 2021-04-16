import React from "react";

import { Header } from "../../components";

export default function HeaderContainer() {
  return (
    <Header>
      <Header.Navigation>
        <Header.Logo></Header.Logo>
        <Header.Link>Trending</Header.Link>
        <Header.Link>Search</Header.Link>
      </Header.Navigation>
      <Header.Wrapper>
        <Header.Button>
          <Header.Search />
          <Header.Close />
        </Header.Button>
        <Header.Profile>
          <Header.Avatar />
          <Header.Popup>
            <Header.Nickname></Header.Nickname>
            <Header.Mail></Header.Mail>
            <Header.Item>to Account</Header.Item>
            <Header.Item>to Userlits</Header.Item>
            <Header.Item>Logout</Header.Item>
          </Header.Popup>
        </Header.Profile>
      </Header.Wrapper>
    </Header>
  );
}
