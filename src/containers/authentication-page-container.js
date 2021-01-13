import React, { useEffect, useState, useContext } from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CSSTransition } from "react-transition-group";

import AuthenticationForm from "../components/authentication-form";
import { getErrorsList, getPreviewSrc } from "../utils/utils";
import { authLogic } from "../utils/firebase";
import { AuthContext } from "../context/auth-context";
import { LoginForm, RegistrationForm } from "./auxillary-containers";
import LoadingSpinner from "../components/loading-spinner";
import { firebase } from "./../libs/firebase";

export default function AuthenticationPageContainer() {
  const location = useParams();
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm();
  const [errorsList, setErrorsList] = useState(null);
  const [userLoading, setUserLoading] = useState(false);
  const [userRedirect, setUserRedirect] = useState(false);
  const [avatarLoading, setAvatarLoading] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState("./../assets/images/poster.png");
  const [isAvatarChanged, setIsAvatarChanged] = useState(false);

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

  const fileValidation = (e) => {
    setAvatarLoading(true);
    if (e.target.files[0].type.includes("image")) {
      if (parseFloat(e.target.files[0].size / (1024 * 1024)) >= 3) {
        setErrorsList(["File size must be smaller than 3 MB"]);
        setAvatarLoading(false);
      } else {
        getPreviewSrc(e.target.files[0], setAvatarSrc);
        setIsAvatarChanged(true);
        setAvatarLoading(false);
      }
    } else {
      setErrorsList(["Incorrect type of file"]);
      setAvatarLoading(false);
    }
  };

  return (
    <>
      {userRedirect ? (
        <Redirect to={"/"} />
      ) : (
        <AuthenticationForm>
          <AuthenticationForm.Form onSubmit={handleSubmit(onSubmit)}>
            {errorsList && (
              <CSSTransition timeout={100} appear={true} in={!!errorsList}>
                {(state) => {
                  console.log(state);
                  return (
                    <AuthenticationForm.ErrorContainer state={state}>
                      {errorsList.map((item, i) => {
                        return (
                          <AuthenticationForm.ErrorMessage key={item + i}>
                            {item}
                          </AuthenticationForm.ErrorMessage>
                        );
                      })}
                    </AuthenticationForm.ErrorContainer>
                  );
                }}
              </CSSTransition>
            )}
            <AuthenticationForm.Title>
              {location.slug.toUpperCase()}
            </AuthenticationForm.Title>
            {location.slug === "login" && !userLoading && (
              <LoginForm register={register} />
            )}
            {location.slug === "registration" && !userLoading && (
              <RegistrationForm
                register={register}
                avatarSrc={avatarSrc}
                fileValidation={fileValidation}
                isAvatarChanged={isAvatarChanged}
              />
            )}
            {userLoading && <LoadingSpinner />}
            <AuthenticationForm.Button
              type="submit"
              disabled={userLoading || avatarLoading}
            >
              {(!userLoading && location.slug.toUpperCase()) || "LOADING"}
            </AuthenticationForm.Button>
          </AuthenticationForm.Form>
        </AuthenticationForm>
      )}
    </>
  );
}
