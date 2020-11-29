import React, { useEffect, useState } from "react";

import { Header } from "../components";

export default function HeaderContainer() {
  const [inputActive, setInputActive] = useState(false);
  const [headerProp, setHeaderProp] = useState({
    scrollPost: 0,
    standardPosition: true,
    visible: true,
  });

  const listener = () => {
    if (document.body.getBoundingClientRect().top < -200) {
      setHeaderProp({
        visible:
          document.body.getBoundingClientRect().top >= headerProp.scrollPost,
        scrollPost: document.body.getBoundingClientRect().top,
        standardPosition: false,
      });
      return;
    }
    if (document.body.getBoundingClientRect().top < 0) {
      setHeaderProp({
        scrollPost: document.body.getBoundingClientRect().top,
        standardPosition: false,
        visible: true,
      });
      return;
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener, false);
  });
  return (
    <Header
      standardColor={headerProp.standardPosition}
      invisible={!headerProp.visible}
    >
      <Header.Inner>
        <Header.Logo to={"/"}>
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="Logo"
          />
        </Header.Logo>
        <Header.Link to={"/"}>FILMS</Header.Link>
        <Header.Link to={"/"}>SERIES</Header.Link>
        <Header.Link to={"/"}>ACTORS</Header.Link>
      </Header.Inner>
      <Header.Inner>
        <Header.Wrapper selected={inputActive}>
          <Header.Input
            widthActive={inputActive}
            onFocus={() => setInputActive(!inputActive)}
            onBlur={() => setInputActive(!inputActive)}
            placeholder={"Search..."}
          />
          <Header.Icon
            onClick={() => setInputActive(!inputActive)}
            selected={inputActive}
          />
        </Header.Wrapper>
        <Header.Link to={"/"}>LOGIN</Header.Link>
      </Header.Inner>
    </Header>
  );
}
