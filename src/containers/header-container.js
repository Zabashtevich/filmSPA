import React, { useEffect, useState, useRef } from "react";

import { Header } from "../components";
import useAuthListener from "../hooks/useAuthListener";
import { getHeaderProps } from "../utils/utils";
import { HeaderProfileContainer } from "./auxillary/auxillary-containers";

export default function HeaderMainContainer() {
  const [inputActive, setInputActive] = useState(false);
  const [headerProp, setHeaderProp] = useState({
    scrollPost: window.pageYOffset,
    visible: true,
    positionchanged: window.pageYOffset !== 0,
  });

  const inputRef = useRef();

  const { user } = useAuthListener();
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
            placeholder={"Search..."}
            onFocus={() => setInputActive(true)}
            onBlur={() => {
              setTimeout(() => setInputActive(false), 100);
            }}
            inputRef={inputRef}
          />
          <Header.Icon
            positionchanged={headerProp.positionchanged ? "true" : null}
            onClick={(e) => {
              if (inputActive) {
                console.log("hi");
                inputRef.current.blur();
              } else if (!inputActive) {
                inputRef.current.focus();
                setInputActive(true);
              }
            }}
          />
        </Header.Wrapper>

        {user === null && (
          <>
            <Header.Link
              to={"/authentication/login"}
              positionchanged={headerProp.positionchanged ? "true" : null}
            >
              LOGIN
            </Header.Link>
            <Header.Link
              to={"/authentication/registration"}
              positionchanged={headerProp.positionchanged ? "true" : null}
            >
              SIGN UP
            </Header.Link>
          </>
        )}

        {user && (
          <HeaderProfileContainer
            positionchanged={headerProp.positionchanged ? "true" : null}
            user={user}
          />
        )}
      </Header.Inner>
    </Header>
  );
}
