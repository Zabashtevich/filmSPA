import React, { useEffect, useState } from "react";

import { Header } from "../components";
import { getHeaderProps } from "../utils/utils";

export default function HeaderContainer() {
  const [inputActive, setInputActive] = useState(false);
  const [headerProp, setHeaderProp] = useState({
    scrollPost: window.pageYOffset,
    visible: true,
    positionchanged: window.pageYOffset !== 0,
  });

  useEffect(() => {
    const listener = () => {
      getHeaderProps(setHeaderProp, headerProp);
    };

    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  }, [headerProp]);

  return (
    <Header
      positionchanged={headerProp.positionchanged ? "true" : null}
      visible={headerProp.visible}
    >
      <Header.Inner>
        <Header.Logo
          to={"/"}
          positionchanged={headerProp.positionchanged ? "true" : null}
        />
        <Header.Link
          to={"/"}
          positionchanged={headerProp.positionchanged ? "true" : null}
        >
          FILMS
        </Header.Link>
        <Header.Link
          to={"/"}
          positionchanged={headerProp.positionchanged ? "true" : null}
        >
          SERIES
        </Header.Link>
        <Header.Link
          to={"/"}
          positionchanged={headerProp.positionchanged ? "true" : null}
        >
          ACTORS
        </Header.Link>
      </Header.Inner>
      <Header.Inner>
        <Header.Wrapper
          positionchanged={headerProp.positionchanged ? "true" : null}
        >
          <Header.Input
            positionStart={headerProp.standardPosition}
            positionchanged={headerProp.positionchanged ? "true" : null}
            widthActive={inputActive}
            onFocus={() => setInputActive(!inputActive)}
            onBlur={() => setInputActive(!inputActive)}
            placeholder={"Search..."}
          />
          <Header.Icon
            positionchanged={headerProp.positionchanged ? "true" : null}
            onClick={() => setInputActive(!inputActive)}
          />
        </Header.Wrapper>
        <Header.Link
          to={"/"}
          positionchanged={headerProp.positionchanged ? "true" : null}
        >
          LOGIN
        </Header.Link>
      </Header.Inner>
    </Header>
  );
}
