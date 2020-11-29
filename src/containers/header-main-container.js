import React, { useEffect, useState } from "react";

import { Header } from "../components";
import { getHeaderProps } from "../utils/utils";

export default function HeaderContainer() {
  const [inputActive, setInputActive] = useState(false);
  const [headerProp, setHeaderProp] = useState({
    scrollPost: 0,
    standardPosition: true,
    visible: true,
    positionchanged: false,
  });

  const headerListener = () => {
    getHeaderProps(setHeaderProp, headerProp);
  };

  useEffect(() => {
    window.addEventListener("scroll", headerListener);
    return () => window.removeEventListener("scroll", headerListener, false);
  });
  return (
    <Header
      positionchanged={headerProp.positionchanged}
      invisible={!headerProp.visible}
    >
      <Header.Inner>
        <Header.Logo
          to={"/"}
          positionchanged={headerProp.positionchanged ? true : null}
        />
        <Header.Link
          to={"/"}
          positionchanged={headerProp.positionchanged ? true : null}
        >
          FILMS
        </Header.Link>
        <Header.Link
          to={"/"}
          positionchanged={headerProp.positionchanged ? true : null}
        >
          SERIES
        </Header.Link>
        <Header.Link
          to={"/"}
          positionchanged={headerProp.positionchanged ? true : null}
        >
          ACTORS
        </Header.Link>
      </Header.Inner>
      <Header.Inner>
        <Header.Wrapper
          positionchanged={headerProp.positionchanged ? true : null}
        >
          <Header.Input
            positionStart={headerProp.standardPosition}
            positionchanged={headerProp.positionchanged ? true : null}
            widthActive={inputActive}
            onFocus={() => setInputActive(!inputActive)}
            onBlur={() => setInputActive(!inputActive)}
            placeholder={"Search..."}
          />
          <Header.Icon
            positionchanged={headerProp.positionchanged ? true : null}
            onClick={() => setInputActive(!inputActive)}
          />
        </Header.Wrapper>
        <Header.Link
          to={"/"}
          positionchanged={headerProp.positionchanged ? true : null}
        >
          LOGIN
        </Header.Link>
      </Header.Inner>
    </Header>
  );
}
