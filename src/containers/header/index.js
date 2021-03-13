import React from "react";

import { Header } from "../../components";

export default function HeaderContainer() {
  return (
    <Header>
      <Header.Wrapper>
        <Header.Logo />
        <Header.Link>MAIN</Header.Link>
        <Header.Link>SEARCH</Header.Link>
        <Header.Link>ACCOUNT</Header.Link>
      </Header.Wrapper>
      <Header.Wrapper>
        <Header.Inner>
          <Header.Input />
          <Header.Icon />
        </Header.Inner>
        <Header.Profile>
          <Header.Avatar />
        </Header.Profile>
      </Header.Wrapper>
    </Header>
  );
}
