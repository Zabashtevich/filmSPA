import React, { useEffect } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";

import { Auth } from "./../../components";
import Login from "./items/login";
import Signup from "./items/signup";
import { checkObject, getErrorList } from "../../utils";
import { useModalContext } from "../../context";

export default function AuthContainer() {
  const { register, handleSubmit, errors } = useForm();
  const [, { showErrorList }] = useModalContext();
  const { slug } = useParams();

  useEffect(() => {
    if (checkObject.notEmty(errors)) {
      showErrorList(getErrorList(errors));
    }
  }, [errors]);

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition key={slug} classNames="fade" timeout={500}>
        <Auth>
          {slug === "login" && (
            <Login register={register} handleSubmit={handleSubmit} />
          )}
          {slug === "signup" && (
            <Signup register={register} handleSubmit={handleSubmit} />
          )}
        </Auth>
      </CSSTransition>
    </SwitchTransition>
  );
}
