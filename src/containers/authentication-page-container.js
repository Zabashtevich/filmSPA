import React, { useEffect, useState, useContext } from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CSSTransition } from "react-transition-group";

import AuthenticationForm from "../components/authentication-form";
import { getErrorsList, getPreviewSrc, validateImg } from "../utils/utils";
import { authLogic } from "../utils/firebase";
import { AuthContext } from "../context/auth-context";
import LoginForm from "./auxillary-containers/containers/auxillary-items/login-form";
import RegistrationForm from "./auxillary-containers/containers/auxillary-items/registration-form";
import LoadingSpinner from "../components/loading-spinner";

export default function AuthenticationPageContainer() {
  const location = useParams();
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm();
  const [errorsList, setErrorsList] = useState(null);
  const [userLoading, setUserLoading] = useState(false);
  const [userRedirect, setUserRedirect] = useState(false);
  const [avatarLoading, setAvatarLoading] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState("./../assets/images/poster.png");
  const [file, setFile] = useState(null);
  const [isAvatarChanged, setIsAvatarChanged] = useState(false);
  const [imgIsValid, setImgIsValid] = useState(false);

  const { firebase } = useContext(AuthContext);

  useEffect(() => {
    if (imgIsValid) {
      getPreviewSrc(file, setAvatarSrc);
      setIsAvatarChanged(true);
      setAvatarLoading(false);
    } else {
      setAvatarSrc("./../assets/images/poster.png");
    }
  }, [imgIsValid, file]);

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
      file,
      isAvatarChanged,
    );
  };

  const fileValidation = (e) => {
    setAvatarLoading(true);
    validateImg(
      setErrorsList,
      setAvatarLoading,
      e.target.files[0],
      setImgIsValid,
      setFile,
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
              <CSSTransition timeout={100} appear={true} in={!!errorsList}>
                {(state) => {
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
