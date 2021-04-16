import React, { useState } from "react";
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

  return (
    <Header>
      <Header.Nav>
        <Header.Logo to="/">TMDB</Header.Logo>
        <Header.Link to="/trending/movie">Trending</Header.Link>
        <Header.Link to="/search">Search</Header.Link>
      </Header.Nav>
      <Header.Wrapper>
        {!profileLoading && checkObject.notEmty(profile) && (
          <Header.Profile>
            <Header.Avatar
              onClick={() => setPopupVisible((prev) => !prev)}
              src={profile?.photoURL}
            />
            <Header.Popup visible={popupVisible}>
              <Header.Nickname>{profile.displayName}</Header.Nickname>
              <Header.Mail></Header.Mail>
              <Header.Item to="">to Account</Header.Item>
              <Header.Item>to Userlits</Header.Item>
              <Header.Item>Logout</Header.Item>
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
