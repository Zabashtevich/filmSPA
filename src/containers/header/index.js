import React, { useEffect, useRef, useState } from "react";

import { Header } from "../../components";

export default function HeaderContainer() {
  const [active, setActive] = useState(false);

  const inputref = useRef();
  useEffect(() => {}, []);

  function inputToggler() {
    setActive((prev) => !prev);
  }
  console.log(active);
  return (
    <Header>
      <Header.Wrapper>
        <Header.Logo>TMDB</Header.Logo>
        <Header.Link to="/">MAIN</Header.Link>
        <Header.Link to="/">SEARCH</Header.Link>
        <Header.Link to="/">ACCOUNT</Header.Link>
      </Header.Wrapper>
      <Header.Wrapper>
        <Header.Inner onClick={inputToggler}>
          <Header.Input
            inputref={inputref}
            onBlur={() => setActive(false)}
            active={active ? 1 : 0}
          />
          <Header.Icon />
        </Header.Inner>
        <Header.Profile>
          <Header.Avatar />
        </Header.Profile>
      </Header.Wrapper>
    </Header>
  );
}
