import React, { useEffect, useState, useContext } from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CSSTransition } from "react-transition-group";

import AuthenticationForm from "../components/authentication-form";
import { getErrorsList } from "../utils/utils";
import { AuthContext } from "../context/auth-context";
import {
  LoginForm,
  RegistrationForm,
} from "./auxillary-containers/auth-pages-type";
import LoadingSpinner from "../components/loading-spinner";

export default function AuthenticationPageContainer() {
  const location = useParams();
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm();
  const [errorsList, setErrorsList] = useState(null);
  const [userLoading, setUserLoading] = useState(false);
  const [userRedirect, setUserRedirect] = useState(false);

  const { firebase } = useContext(AuthContext);

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setErrorsList(getErrorsList(errors));
    }
  }, [errors, setErrorsList]);

  const onSubmit = ({ nickname, email, password, repeatPassword }) => {
    setUserLoading(true);
    switch (location.slug) {
      case "login":
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            history.push("/");
          })
          .catch(({ message }) => {
            setErrorsList([message]);
            setUserLoading(false);
          });
        break;
      case "registration":
        repeatPassword !== password
          ? getErrorsList(repeatPassword, setErrorsList)
          : setErrorsList(null);
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((result) => {
            result.user
              .updateProfile({
                displayName: nickname,
              })
              .then(() => {
                firebase
                  .firestore()
                  .collection(`${nickname}`)
                  .doc(`moviesrated`)
                  .set({ list: [] })
                  .catch(() => {
                    setUserLoading(false);
                    setErrorsList([`something gone wrong`]);
                  });
                firebase
                  .firestore()
                  .collection(`${nickname}`)
                  .doc(`collection`)
                  .set({ list: [] })
                  .catch(() => {
                    setUserLoading(false);
                    setErrorsList([`something gone wrong`]);
                  })
                  .then(() => {
                    setUserLoading(false);
                    setUserRedirect(true);
                  });
              });
          })
          .catch(({ message }) => {
            setErrorsList([message]);
            setUserLoading(false);
          });

        break;
      default:
        setErrorsList(["something gone wrong"]);
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
              <RegistrationForm register={register} />
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
