import React, { useEffect, useState } from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CSSTransition } from "react-transition-group";

import AuthForm from "../../components/auth-form";
import { RegistrationFormContainer, LoginFormContainer } from "./auxillary";
import { SpinnerSmall } from "../../components/loading-spinner";

export default function AuthContainer() {
  // const location = useParams();
  // const history = useHistory();

  // const { register, handleSubmit, errors } = useForm();
  // const [errorsList, setErrorsList] = useState(null);
  // const [userLoading, setUserLoading] = useState(false);
  // const [userRedirect, setUserRedirect] = useState(false);
  // const [avatarLoading, setAvatarLoading] = useState(false);
  // const [avatarSrc, setAvatarSrc] = useState("./../assets/images/poster.png");
  // const [file, setFile] = useState(null);
  // const [isAvatarChanged, setIsAvatarChanged] = useState(false);
  // const [imgIsValid, setImgIsValid] = useState(false);
  // //TODO FIREBASE

  // useEffect(() => {
  //   if (imgIsValid) {
  //     getPreviewSrc(file, setAvatarSrc);
  //     setIsAvatarChanged(true);
  //     setAvatarLoading(false);
  //   } else {
  //     setAvatarSrc("./../assets/images/poster.png");
  //   }
  // }, [imgIsValid, file]);

  // useEffect(() => {
  //   if (Object.keys(errors).length > 0) {
  //     setErrorsList(getErrorsList(errors));
  //   }
  // }, [errors, setErrorsList]);

  // const onSubmit = ({ nickname, email, password, repeatPassword }) => {
  //   authLogic(
  //     setUserLoading,
  //     location.slug,
  //     firebase,
  //     nickname,
  //     email,
  //     password,
  //     repeatPassword,
  //     setErrorsList,
  //     setUserRedirect,
  //     history,
  //     file,
  //     isAvatarChanged,
  //   );
  // };

  // const fileValidation = (e) => {
  //   setAvatarLoading(true);
  //   validateImg(
  //     setErrorsList,
  //     setAvatarLoading,
  //     e.target.files[0],
  //     setImgIsValid,
  //     setFile,
  //   );
  // };

  return null;

  /* {userRedirect ? (
        <Redirect to={"/"} />
      ) : (
        <AuthForm>
          <AuthForm.Form onSubmit={handleSubmit(onSubmit)}>
            {errorsList && (
              <CSSTransition timeout={100} appear={true} in={!!errorsList}>
                {(state) => {
                  return (
                    <AuthForm.ErrorContainer state={state}>
                      {errorsList.map((item, i) => {
                        return (
                          <AuthForm.ErrorMessage key={item + i}>
                            {item}
                          </AuthForm.ErrorMessage>
                        );
                      })}
                    </AuthForm.ErrorContainer>
                  );
                }}
              </CSSTransition>
            )}
            <AuthForm.Title>{location.slug.toUpperCase()}</AuthForm.Title>
            {location.slug === "login" && !userLoading && (
              <LoginFormContainer register={register} />
            )}
            {location.slug === "registration" && !userLoading && (
              <RegistrationFormContainer
                register={register}
                avatarSrc={avatarSrc}
                fileValidation={fileValidation}
                isAvatarChanged={isAvatarChanged}
              />
            )}
            {userLoading && <SpinnerSmall />}
            <AuthForm.Button
              type="submit"
              disabled={userLoading || avatarLoading}
            >
              {(!userLoading && location.slug.toUpperCase()) || "LOADING"}
            </AuthForm.Button>
          </AuthForm.Form>
        </AuthForm>
      )}
    </> */
}
