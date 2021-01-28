import React from "react";
import Account from "../containers/account";

import HeaderContainer from "./../containers/header-container";
import AccountContainer from "./../containers/account";
import AccountPanelContainer from "./../containers/account-panel-container";

export default function AccountPage() {
  return (
    <>
      <HeaderContainer />
      <AccountContainer />
      <AccountPanelContainer />
    </>
  );
}
