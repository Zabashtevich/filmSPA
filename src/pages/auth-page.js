import React from "react";

import {
  AuthContainer,
  ModalContainer,
  NoticeContainer,
  ProcessContainer,
} from "../containers";

export default function AuthPage() {
  return (
    <>
      <ProcessContainer />
      <ModalContainer />
      <ModalContainer />
      <AuthContainer />
    </>
  );
}
