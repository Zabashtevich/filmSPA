import React, { useEffect, useState, useContext } from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CSSTransition } from "react-transition-group";

import AuthenticationForm from "../components/authentication-form";
import { getErrorsList } from "../utils/utils";
import { authLogic } from "../utils/firebase";
import { AuthContext } from "../context/auth-context";
import { LoginForm, RegistrationForm } from "./auxillary-containers";
import LoadingSpinner from "../components/loading-spinner";

export default function AuthenticationPageContainer() {
  const location = useParams();
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm();
  const [errorsList, setErrorsList] = useState(null);
  const [userLoading, setUserLoading] = useState(false);
  const [userRedirect, setUserRedirect] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState("./../assets/images/poster.png");

  const { firebase } = useContext(AuthContext);

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setErrorsList(getErrorsList(errors));
    }
  }, [errors, setErrorsList]);

  const onSubmit = ({ nickname, email, password, repeatPassword }) => {
    authLogic(
      setUserLoading,
      location.slug,
      firebase,
      nickname,
      email,
      password,
      repeatPassword,
      setErrorsList,
      setUserRedirect,
      history,
    );
  };

  return (
    <>
      {userRedirect ? (
        <Redirect to={"/"} />
      ) : (
        <AuthenticationForm>
          <AuthenticationForm.Form onSubmit={handleSubmit(onSubmit)}>
            {errorsList && (
              <CSSTransition
                classNames="fade"
                timeout={250}
                appear={true}
                in={Object.keys(errors).length > 0}
              >
                <AuthenticationForm.ErrorContainer>
                  {errorsList.map((item, i) => {
                    return (
                      <AuthenticationForm.ErrorMessage key={item + i}>
                        {item}
                      </AuthenticationForm.ErrorMessage>
                    );
                  })}
                </AuthenticationForm.ErrorContainer>
              </CSSTransition>
            )}
            <AuthenticationForm.Title>
              {location.slug.toUpperCase()}
            </AuthenticationForm.Title>
            {location.slug === "login" && !userLoading && (
              <LoginForm register={register} />
            )}
            {location.slug === "registration" && !userLoading && (
              <RegistrationForm register={register} avatarSrc={avatarSrc} />
            )}
            {userLoading && <LoadingSpinner />}
            <AuthenticationForm.Button type="submit" disabled={userLoading}>
              {(!userLoading && location.slug.toUpperCase()) || "LOADING"}
            </AuthenticationForm.Button>
          </AuthenticationForm.Form>
        </AuthenticationForm>
      )}
    </>
  );
}
