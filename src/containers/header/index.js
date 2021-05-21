import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import { firebase } from "./../../libs/firebase";
import { BarContainer } from "./../";
import { Header } from "../../components";
import { useHistory } from "react-router-dom";

export default function HeaderContainer() {
  const [headerVisible, setHeaderVisible] = useState(true);
  const [searchActive, setSearchActive] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const { profile, loggedIn, userDataLoading } = useSelector(
    (state) => state.userData,
  );
  let prevScrollPosition = 0;
  const history = useHistory();

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
      <Header.Nav>
        <Header.List>
          <Header.Item>
            <Header.Logo to="/">TMDB</Header.Logo>
          </Header.Item>
          <Header.Item>
            <Header.Link to="/trending/movie">Trending</Header.Link>
          </Header.Item>
        </Header.List>

        <Header.List>
          {!userDataLoading && !loggedIn && (
            <>
              <Header.Item>
                <Header.Link to="/authentication/login">Login</Header.Link>
              </Header.Item>
              <Header.Item>
                <Header.Link to="/authentication/signup">Signup</Header.Link>
              </Header.Item>
            </>
          )}
          <SwitchTransition mode="out-in">
            <CSSTransition key={searchActive} classNames="fade" timeout={200}>
              <Header.Button onClick={() => setSearchActive((prev) => !prev)}>
                {!searchActive && <Header.Search data-testid="header-search" />}
                {searchActive && <Header.Close data-testid="header-close" />}
              </Header.Button>
            </CSSTransition>
          </SwitchTransition>
          <SwitchTransition mode={"out-in"}>
            <CSSTransition key={loggedIn} classNames="fade" timeout={500}>
              <Header.Inner onClick={(e) => e.stopPropagation()}>
                {loggedIn && (
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
                      data-testid="header-popup"
                      visible={popupVisible}
                    >
                      <Header.Nickname>{profile.displayName}</Header.Nickname>
                      <Header.Mail>{profile.email}</Header.Mail>
                      <Header.Category to="/account">
                        to Account
                      </Header.Category>
                      <Header.Category to="/account/userlists">
                        to Userlists
                      </Header.Category>
                      <Header.Logout
                        onClick={() => {
                          firebase.auth().signOut();
                          history.push("/");
                        }}
                      >
                        Logout
                      </Header.Logout>
                    </Header.Popup>
                  </Header.Profile>
                )}
              </Header.Inner>
            </CSSTransition>
          </SwitchTransition>
        </Header.List>
      </Header.Nav>
      <BarContainer visible={searchActive} />
    </Header>
  );
}
