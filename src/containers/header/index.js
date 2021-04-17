import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { checkObject } from "./../../utils";
import { Header } from "../../components";
import { CSSTransition, SwitchTransition } from "react-transition-group";

export default function HeaderContainer() {
  const [searchActive, setSearchActive] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const { profileLoading, profile } = useSelector((state) => state.userProfile);

  // function headerToggler() {
  //   const current = window.pageYOffset;

  //   if (prevScrollPosition > current) {
  //     setHeaderVisible(true);
  //   } else {
  //     setHeaderVisible(false);
  //   }
  //   prevScrollPosition = current;
  // }

  function popupToggler() {
    setPopupVisible((prev) => !prev);
  }

  useEffect(() => {
    if (!popupVisible) {
      window.addEventListener("click", popupToggler);
    }
    return () => window.removeEventListener("click", popupToggler);
  }, []);

  return (
    <Header>
      <Header.Nav>
        <Header.Logo to="/">TMDB</Header.Logo>
        <Header.Link to="/trending/movie">Trending</Header.Link>
        <Header.Link to="/search">Search</Header.Link>
      </Header.Nav>
      <Header.Wrapper onClick={(e) => e.stopPropagation()}>
        {!profileLoading && checkObject.notEmty(profile) && (
          <Header.Profile onClick={popupToggler}>
            <Header.Avatar
              src={profile?.photoURL}
              popupVisible={popupVisible && 1}
            />
            <Header.Popup visible={popupVisible}>
              <Header.Nickname>{profile.displayName}</Header.Nickname>
              <Header.Mail>{profile.email}</Header.Mail>
              <Header.Item to="/acount">to Account</Header.Item>
              <Header.Item to="/account/userlists">to Userlits</Header.Item>
              <Header.Logout>Logout</Header.Logout>
            </Header.Popup>
          </Header.Profile>
        )}
        <SwitchTransition mode="out-in">
          <CSSTransition key={searchActive} classNames="fade" timeout={200}>
            <Header.Button onClick={() => setSearchActive((prev) => !prev)}>
              {!searchActive && <Header.Search />}
              {searchActive && <Header.Close />}
            </Header.Button>
          </CSSTransition>
        </SwitchTransition>
      </Header.Wrapper>
    </Header>
  );
}
