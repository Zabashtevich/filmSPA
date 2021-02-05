import React, { useState } from "react";

import { firebase } from "../../../../libs/firebase";

import { HeaderProfile } from "../../../../components";
import { ErrorModalContainer } from "./../../../";
import { useHistory } from "react-router-dom";
import { logoutLogic } from "../../../../utils/firebase";

export default function HeaderProfileContainer({ user, positionchanged }) {
  const [popupVisible, setPopupVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorModalVisible, setErrorModalVisible] = useState(false);

  const history = useHistory();

  const logOut = () => {
    logoutLogic(setErrorMessage, setErrorModalVisible, history, firebase);
  };

  const hideErrorModal = () => {
    document.body.style.overflow = "auto";
    setErrorMessage(null);
    setErrorModalVisible(false);
  };
  return (
    <HeaderProfile>
      {errorModalVisible && (
        <ErrorModalContainer
          errorMessage={errorMessage}
          closeModal={hideErrorModal}
          errorModalVisible={errorModalVisible}
        />
      )}
      <HeaderProfile.Icon
        src={user.photoURL || "./assets/images/poster.png"}
        onClick={() => setPopupVisible((prev) => !prev)}
        positionchanged={positionchanged}
      />

      <HeaderProfile.PopupContainer visible={popupVisible}>
        <HeaderProfile.PopupMetawrapper popupVisible={popupVisible}>
          <HeaderProfile.PopupNickname>
            {user.displayName}
          </HeaderProfile.PopupNickname>
          <HeaderProfile.PopupEmail>{user.email}</HeaderProfile.PopupEmail>
        </HeaderProfile.PopupMetawrapper>
        <HeaderProfile.PopupLink to={`/account/${user.displayName}`}>
          To profile
        </HeaderProfile.PopupLink>
        <HeaderProfile.PopupLink to={`/account/${user.displayName}/edit`}>
          Edit profile
        </HeaderProfile.PopupLink>
        <HeaderProfile.PopupLogout onClick={logOut}>
          Log out
        </HeaderProfile.PopupLogout>
      </HeaderProfile.PopupContainer>
    </HeaderProfile>
  );
}
