import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";

import { Header } from "../../components";

export default function HeaderContainer() {
  const [headerVisible, setHeaderVisible] = useState(true);
  const [active, setActive] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const { profileLoading, profile } = useSelector((state) => state.userProfile);
  let prevScrollPosition = 0;
  console.log(profile?.photoURL, profile);
  function inputToggler() {
    setActive((prev) => !prev);
  }

  function headerToggler() {
    const current = window.pageYOffset;

    if (prevScrollPosition > current) {
      setHeaderVisible(true);
    } else {
      setHeaderVisible(false);
    }
    prevScrollPosition = current;
  }

  useEffect(() => {
    window.addEventListener("scroll", headerToggler);
    return () => window.removeEventListener("scroll", headerToggler);
  }, []);

  useEffect(() => {
    if (popupVisible) {
      window.addEventListener("click", () => setPopupVisible(false));
    }
    return () => window.removeEventListener("click", this);
  }, [popupVisible]);

  const profilevisible = !profileLoading && profile !== null;

  return (
    <Header visible={headerVisible}>
      <Header.Wrapper>
        <Header.Logo>TMDB</Header.Logo>
        <Header.Link to="/">MAIN</Header.Link>
        <Header.Link to="/">SEARCH</Header.Link>
        <Header.Link to="/">ACCOUNT</Header.Link>
      </Header.Wrapper>
      <Header.Wrapper>
        <Header.Inner onClick={inputToggler}>
          <Header.Input
            onBlur={() => setActive(false)}
            active={active ? 1 : 0}
          />
          <Header.Icon />
        </Header.Inner>
        <Header.Profile>
          {profilevisible && (
            <Header.Avatar
              src={profile?.photoURL || "https://dummyimage.com/50x50/aaa/aaa"}
              onClick={(e) => {
                e.stopPropagation();
                setPopupVisible((prev) => !prev);
              }}
            />
          )}
          <Header.Popup visible={popupVisible}>
            <Header.Info>
              <Header.Name>{profile?.displayName}</Header.Name>
              <Header.Mail>{profile?.email}</Header.Mail>
            </Header.Info>
            <Header.Account to="/account">To profile</Header.Account>
            <Header.Signout>Sign Out</Header.Signout>
          </Header.Popup>
        </Header.Profile>
      </Header.Wrapper>
    </Header>
  );
}
