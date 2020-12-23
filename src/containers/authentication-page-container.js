import React, { useEffect, useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CSSTransition } from "react-transition-group";

import AuthenticationForm from "../components/authentication-form";
import { getErrorsList } from "../utils/utils";
import { AuthContext } from "../context/auth-context";
import {
  LoginForm,
  RegistrationForm,
} from "./auxillary-containers/auth-pages-type";

export default function AuthenticationPageContainer() {
  const location = useParams();
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm();
  const [errorsList, setErrorsList] = useState(null);
  const [userLoading, setUserLoading] = useState(false);

  const { firebase } = useContext(AuthContext);

  useEffect(() => {
    if (Object.keys(errors).length > 0) getErrorsList(errors, setErrorsList);
  }, [errors, setErrorsList, errorsList]);

  const onSubmit = ({ nickname, email, password, repeatPassword }) => {
    setUserLoading(true);
    if (location.slug === "registration") {
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
              setUserLoading(false);
              history.push("/");
            });
        })
        .catch(() => {
          setErrorsList(["Something gone wrong"]);
          setUserLoading(false);
        });
    }
  };

  return (
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
        {location.slug === "login" ? (
          <LoginForm register={register} />
        ) : (
          <RegistrationForm register={register} />
        )}
        <AuthenticationForm.Button type="submit">
          {location.slug.toUpperCase()}
        </AuthenticationForm.Button>
      </AuthenticationForm.Form>
    </AuthenticationForm>
  );
}
