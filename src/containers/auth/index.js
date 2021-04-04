import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useParams } from "react-router";

import { Auth } from "./../../components";
import Login from "./items/login";
import Signup from "./items/signup";

export default function AuthContainer() {
  const { slug } = useParams();

  return (
    <Auth>
      <SwitchTransition mode="out-in">
        <CSSTransition key={slug} classNames="fade" timeout={500}>
          <Auth.Form type={slug}>
            {slug === "login" && <Login />}
            {slug === "signup" && <Signup />}
          </Auth.Form>
        </CSSTransition>
      </SwitchTransition>
    </Auth>
  );
}
