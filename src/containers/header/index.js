import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import { firebase } from "./../../libs/firebase";
import { BarContainer } from "./../";
import { Header } from "../../components";

export default function HeaderContainer() {
  const [headerVisible, setHeaderVisible] = useState(true);
  const [searchActive, setSearchActive] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const { profile, profileExist, userDataLoading } = useSelector(
    (state) => state.userData,
  );
  let prevScrollPosition = 0;

  function headerToggler() {
    const current = window.pageYOffset;

    if (prevScrollPosition > current) {
      setHeaderVisible(true);
    } else {
      setHeaderVisible(false);
    }
    prevScrollPosition = current;
  }

  function popupToggler() {
    setPopupVisible((prev) => !prev);
  }

  useEffect(() => {
    if (popupVisible) {
      window.addEventListener("click", popupToggler);
    }
    return () => window.removeEventListener("click", popupToggler);
  }, [popupVisible]);

  useEffect(() => {
    window.addEventListener("scroll", headerToggler);
    return () => window.removeEventListener("scroll", headerToggler);
  }, []);

  return (
    <Header headerHidden={!headerVisible}>
      <Header.Inner>
        <Header.Nav>
          <Header.Logo to="/">TMDB</Header.Logo>
          <Header.Link to="/trending/movie">Trending</Header.Link>
          <Header.Link to="/search">Search</Header.Link>
        </Header.Nav>
        <SwitchTransition mode={"out-in"}>
          <CSSTransition
            key={`${profileExist}${userDataLoading}`}
            classNames="fade"
            timeout={500}
          >
            <Header.Wrapper onClick={(e) => e.stopPropagation()}>
              {!userDataLoading && profileExist && (
                <Header.Profile
                  onClick={popupToggler}
                  data-testid="header-profile"
                >
                  <Header.Avatar
                    src={profile?.photoURL}
                    popupVisible={popupVisible && 1}
                    alt="user avatar"
                  />
                  <Header.Popup
                    visible={popupVisible}
                    data-testid="header-popup"
                  >
                    <Header.Nickname>{profile.displayName}</Header.Nickname>
                    <Header.Mail>{profile.email}</Header.Mail>
                    <Header.Item to="/acount">to Account</Header.Item>
                    <Header.Item to="/account/userlists">
                      to Userlists
                    </Header.Item>
                    <Header.Logout onClick={() => firebase.auth().signOut()}>
                      Logout
                    </Header.Logout>
                  </Header.Popup>
                </Header.Profile>
              )}
              {!userDataLoading && !profileExist && (
                <>
                  <Header.Link to="/authentication/login">Login</Header.Link>
                  <Header.Link to="/authentication/signup">Signup</Header.Link>
                </>
              )}
              <SwitchTransition mode="out-in">
                <CSSTransition
                  key={searchActive}
                  classNames="fade"
                  timeout={200}
                >
                  <Header.Button
                    onClick={() => setSearchActive((prev) => !prev)}
                  >
                    {!searchActive && (
                      <Header.Search data-testid="header-search" />
                    )}
                    {searchActive && (
                      <Header.Close data-testid="header-close" />
                    )}
                  </Header.Button>
                </CSSTransition>
              </SwitchTransition>
            </Header.Wrapper>
          </CSSTransition>
        </SwitchTransition>
      </Header.Inner>
      <BarContainer visible={searchActive} />
    </Header>
  );
}
