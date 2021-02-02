import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import { firebase } from "../../../../libs/firebase";

import { HeaderProfile } from "../../../../components";
import { ErrorModalContainer } from "./../../../";
import { useHistory } from "react-router-dom";

export default function HeaderProfileContainer({ user, positionchanged }) {
  const [popupVisible, setPopupVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorModalVisible, setErrorModalVisible] = useState(false);

  const history = useHistory();
  const logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setErrorMessage(["Sorry, now you can not log out"]);
        setErrorModalVisible(true);
      });
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

      <CSSTransition
        appear={true}
        in={popupVisible}
        timeout={{ enter: 600, exit: 600 }}
        unmountOnExit
        classNames="my-node"
      >
        <HeaderProfile.PopupContainer>
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
      </CSSTransition>
    </HeaderProfile>
  );
}
