import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

import { HeaderMain } from "../components";

export default function HeaderMainContainer() {
  const [inputActive, setInputActive] = useState(false);

  return (
    <HeaderMain>
      <HeaderMain.Inner>
        <HeaderMain.Logo to={"/"}>
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="Logo"
          />
        </HeaderMain.Logo>
        <HeaderMain.Link to={"/"}>Films</HeaderMain.Link>
        <HeaderMain.Link to={"/"}>Series</HeaderMain.Link>
        <HeaderMain.Link to={"/"}>Actors</HeaderMain.Link>
      </HeaderMain.Inner>
      <HeaderMain.Inner>
        <HeaderMain.Wrapper>
          <HeaderMain.Input
            widthActive={inputActive}
            onFocus={() => setInputActive(!inputActive)}
            onBlur={() => setInputActive(!inputActive)}
            placeholder="Search..."
          />
          <HeaderMain.Icon />
        </HeaderMain.Wrapper>
        <HeaderMain.Link to={"/"}>Login</HeaderMain.Link>
      </HeaderMain.Inner>
    </HeaderMain>
  );
}