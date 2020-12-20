import React from "react";
import { useParams } from "react-router-dom";

import AuthenticationForm from "../components/authentication-form";

export default function AuthenticationPageContainer() {
  const location = useParams();

  return (
    <AuthenticationForm>
      <AuthenticationForm.ContentContainer>
        <AuthenticationForm.ErrorContainer>
          <AuthenticationForm.ErrorMessage></AuthenticationForm.ErrorMessage>
        </AuthenticationForm.ErrorContainer>
        <AuthenticationForm.Title>
          {location.slug.toUpperCase()}
        </AuthenticationForm.Title>
        <AuthenticationForm.Wrapper>
          <AuthenticationForm.Label>Login</AuthenticationForm.Label>
          <AuthenticationForm.Input />
        </AuthenticationForm.Wrapper>
        <AuthenticationForm.Wrapper>
          <AuthenticationForm.Label>Password</AuthenticationForm.Label>
          <AuthenticationForm.Input />
        </AuthenticationForm.Wrapper>
        <AuthenticationForm.Button>Register</AuthenticationForm.Button>
      </AuthenticationForm.ContentContainer>
    </AuthenticationForm>
  );
}
