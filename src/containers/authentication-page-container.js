import React from "react";
import { useParams } from "react-router-dom";

import AuthenticationForm from "../components/authentication-form";

export default function AuthenticationPageContainer() {
  const location = useParams();

  return (
    <AuthenticationForm>
      <AuthenticationForm.Form>
        <AuthenticationForm.ErrorContainer>
          <AuthenticationForm.ErrorMessage></AuthenticationForm.ErrorMessage>
        </AuthenticationForm.ErrorContainer>
        <AuthenticationForm.Title>
          {location.slug.toUpperCase()}
        </AuthenticationForm.Title>
        {location.slug === "login" ? (
          <>
            <AuthenticationForm.Wrapper>
              <AuthenticationForm.Label>Email</AuthenticationForm.Label>
              <AuthenticationForm.Input type={"email"} name={"email"} />
            </AuthenticationForm.Wrapper>
            <AuthenticationForm.Wrapper>
              <AuthenticationForm.Label>Password</AuthenticationForm.Label>
              <AuthenticationForm.Input type={"password"} name={"password"} />
            </AuthenticationForm.Wrapper>
          </>
        ) : (
          <>
            <AuthenticationForm.Wrapper>
              <AuthenticationForm.Label>Name</AuthenticationForm.Label>
              <AuthenticationForm.Input type={"name"} name={"name"} />
            </AuthenticationForm.Wrapper>
            <AuthenticationForm.Wrapper>
              <AuthenticationForm.Label>Email</AuthenticationForm.Label>
              <AuthenticationForm.Input type={"email"} name={"email"} />
            </AuthenticationForm.Wrapper>
            <AuthenticationForm.Wrapper>
              <AuthenticationForm.Label>Password</AuthenticationForm.Label>
              <AuthenticationForm.Input type={"password"} name={"password"} />
            </AuthenticationForm.Wrapper>
            <AuthenticationForm.Wrapper>
              <AuthenticationForm.Label>
                Repeat password
              </AuthenticationForm.Label>
              <AuthenticationForm.Input
                type={"password"}
                name={"repeatPassword"}
              />
            </AuthenticationForm.Wrapper>
          </>
        )}
        <AuthenticationForm.Button type={"submit"}>
          {location.slug.toUpperCase()}
        </AuthenticationForm.Button>
      </AuthenticationForm.Form>
    </AuthenticationForm>
  );
}
