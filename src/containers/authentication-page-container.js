import React, { useEffect, useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CSSTransition } from "react-transition-group";

import AuthenticationForm from "../components/authentication-form";
import { getErrorsList } from "../utils/utils";
import { AuthContext } from "../context/auth-context";

export default function AuthenticationPageContainer() {
  const location = useParams();
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm();
  const [errorsList, setErrorsList] = useState(null);

  const { firebase } = useContext(AuthContext);

  useEffect(() => {
    if (Object.keys(errors).length > 0) getErrorsList(errors, setErrorsList);
  }, [errors, setErrorsList, errorsList]);

  const onSubmit = ({ nickname, email, password, repeatPassword }) => {
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
              history.push("/");
            });
        })
        .catch(() => {
          setErrorsList(["Something gone wrong"]);
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
          <>
            <AuthenticationForm.Wrapper>
              <AuthenticationForm.Label>Email</AuthenticationForm.Label>
              <AuthenticationForm.Input
                type={"email"}
                name={"email"}
                ref={register({
                  required: {
                    value: true,
                    message: "email field can not be empty",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                })}
              />
            </AuthenticationForm.Wrapper>
            <AuthenticationForm.Wrapper>
              <AuthenticationForm.Label>Password</AuthenticationForm.Label>
              <AuthenticationForm.Input
                type={"password"}
                name={"password"}
                ref={register({
                  required: {
                    value: true,
                    message: "password field can not be empty",
                  },
                  maxLength: 30,
                })}
              />
            </AuthenticationForm.Wrapper>
          </>
        ) : (
          <>
            <AuthenticationForm.Wrapper>
              <AuthenticationForm.Label>Nickname</AuthenticationForm.Label>
              <AuthenticationForm.Input
                type={"name"}
                name={"nickname"}
                ref={register({
                  required: {
                    value: true,
                    message: "nickname field can not be empty",
                  },
                  maxLength: 20,
                })}
              />
            </AuthenticationForm.Wrapper>
            <AuthenticationForm.Wrapper>
              <AuthenticationForm.Label>Email</AuthenticationForm.Label>
              <AuthenticationForm.Input
                type={"email"}
                name={"email"}
                ref={register({
                  required: {
                    value: true,
                    message: "email field can not be empty",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                })}
              />
            </AuthenticationForm.Wrapper>
            <AuthenticationForm.Wrapper>
              <AuthenticationForm.Label>Password</AuthenticationForm.Label>
              <AuthenticationForm.Input
                type={"password"}
                name={"password"}
                ref={register({
                  required: {
                    value: true,
                    message: "password field can not be empty",
                  },
                  maxLength: 30,
                })}
              />
            </AuthenticationForm.Wrapper>
            <AuthenticationForm.Wrapper>
              <AuthenticationForm.Label>
                Repeat password
              </AuthenticationForm.Label>
              <AuthenticationForm.Input
                type={"password"}
                name={"repeatPassword"}
                ref={register({
                  required: {
                    value: true,
                    message: "password field can not be empty",
                  },
                  maxLength: 30,
                })}
              />
            </AuthenticationForm.Wrapper>
          </>
        )}
        <AuthenticationForm.Button type="submit">
          {location.slug.toUpperCase()}
        </AuthenticationForm.Button>
      </AuthenticationForm.Form>
    </AuthenticationForm>
  );
}
