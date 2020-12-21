import React from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import AuthenticationForm from "../components/authentication-form";

export default function AuthenticationPageContainer() {
  const location = useParams();

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <AuthenticationForm>
      <AuthenticationForm.Form onSubmit={handleSubmit(onSubmit)}>
        <AuthenticationForm.ErrorContainer>
          <AuthenticationForm.ErrorMessage>
            Ты че пес
          </AuthenticationForm.ErrorMessage>
        </AuthenticationForm.ErrorContainer>
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
                ref={register({ required: true })}
              />
            </AuthenticationForm.Wrapper>
            <AuthenticationForm.Wrapper>
              <AuthenticationForm.Label>Password</AuthenticationForm.Label>
              <AuthenticationForm.Input
                type={"password"}
                name={"password"}
                ref={register({ required: true })}
              />
            </AuthenticationForm.Wrapper>
          </>
        ) : (
          <>
            <AuthenticationForm.Wrapper>
              <AuthenticationForm.Label>Name</AuthenticationForm.Label>
              <AuthenticationForm.Input
                type={"name"}
                name={"name"}
                ref={register({ required: true })}
              />
            </AuthenticationForm.Wrapper>
            <AuthenticationForm.Wrapper>
              <AuthenticationForm.Label>Email</AuthenticationForm.Label>
              <AuthenticationForm.Input
                type={"email"}
                name={"email"}
                ref={register({ required: true })}
              />
            </AuthenticationForm.Wrapper>
            <AuthenticationForm.Wrapper>
              <AuthenticationForm.Label>Password</AuthenticationForm.Label>
              <AuthenticationForm.Input
                type={"password"}
                name={"password"}
                ref={register({ required: true })}
              />
            </AuthenticationForm.Wrapper>
            <AuthenticationForm.Wrapper>
              <AuthenticationForm.Label>
                Repeat password
              </AuthenticationForm.Label>
              <AuthenticationForm.Input
                type={"password"}
                name={"repeatPassword"}
                ref={register({ required: true })}
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
