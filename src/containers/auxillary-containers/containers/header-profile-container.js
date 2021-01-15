import React, { useState } from "react";

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
      {popupVisible && (
        <HeaderProfile.PopupContainer>
          <HeaderProfile.PopupMetawrapper popupVisible={popupVisible}>
            <HeaderProfile.PopupNickname>
              {user.displayName}
            </HeaderProfile.PopupNickname>
            <HeaderProfile.PopupEmail>{user.email}</HeaderProfile.PopupEmail>
          </HeaderProfile.PopupMetawrapper>
          <HeaderProfile.PopupLink>To profile</HeaderProfile.PopupLink>
          <HeaderProfile.PopupLink>Edit profile</HeaderProfile.PopupLink>
          <HeaderProfile.PopupLogout>Log out</HeaderProfile.PopupLogout>
        </HeaderProfile.PopupContainer>
      )}
    </HeaderProfile>
  );
}
