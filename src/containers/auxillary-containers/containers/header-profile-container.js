import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import { HeaderProfile } from "../../../components";

export default function HeaderProfileContainer({ user, positionchanged }) {
  const [popupVisible, setPopupVisible] = useState(false);
  return (
    <HeaderProfile>
      <HeaderProfile.Icon
        src={user.photoURL || "./assets/images/poster.png"}
        onClick={() => setPopupVisible((prev) => !prev)}
        positionchanged={positionchanged}
      />

      <CSSTransition
        appear={true}
        in={popupVisible}
        timeout={{ enter: 600, exit: 600 }}
        unmountOnExit
        classNames="my-node"
      >
        {(state) => {
          console.log(state);
          return (
            <HeaderProfile.PopupContainer state={state}>
              <HeaderProfile.PopupMetawrapper popupVisible={popupVisible}>
                <HeaderProfile.PopupNickname>
                  {user.displayName}
                </HeaderProfile.PopupNickname>
                <HeaderProfile.PopupEmail>
                  {user.email}
                </HeaderProfile.PopupEmail>
              </HeaderProfile.PopupMetawrapper>
              <HeaderProfile.PopupLink to="/">
                To profile
              </HeaderProfile.PopupLink>
              <HeaderProfile.PopupLink to="/">
                Edit profile
              </HeaderProfile.PopupLink>
              <HeaderProfile.PopupLogout>Log out</HeaderProfile.PopupLogout>
            </HeaderProfile.PopupContainer>
          );
        }}
      </CSSTransition>
    </HeaderProfile>
  );
}
