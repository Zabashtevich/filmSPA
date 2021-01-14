import React, { useState } from "react";

import { HeaderProfile } from "../../../components";

export default function HeaderProfileContainer({ user }) {
  const [popupVisible, setPopupVisible] = useState(false);
  return (
    <HeaderProfile>
      <HeaderProfile.Icon
        src={user.photoURL || "./assets/images/poster.png"}
        onClick={() => setPopupVisible((prev) => !prev)}
      />
      {popupVisible && (
        <HeaderProfile.PopupContainer>
          <HeaderProfile.PopupNickname>
            {user.displayName}
          </HeaderProfile.PopupNickname>
          <HeaderProfile.PopupLink>Edit profile</HeaderProfile.PopupLink>
          <HeaderProfile.PopupLogout>Log out</HeaderProfile.PopupLogout>
        </HeaderProfile.PopupContainer>
      )}
    </HeaderProfile>
  );
}
