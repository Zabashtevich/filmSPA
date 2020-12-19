import React from "react";

import AuthenticationForm from "../components/authentication-form";

export default function AuthenticationPageContainer() {
  return (
    <AuthenticationForm>
      <AuthenticationForm.ErrorContainer>
        <AuthenticationForm.ErrorMessage></AuthenticationForm.ErrorMessage>
      </AuthenticationForm.ErrorContainer>
      <AuthenticationForm.Title></AuthenticationForm.Title>
      <AuthenticationForm.Wrapper>
        <AuthenticationForm.Label></AuthenticationForm.Label>
        <AuthenticationForm.Input />
      </AuthenticationForm.Wrapper>
      <AuthenticationForm.Wrapper>
        <AuthenticationForm.Label></AuthenticationForm.Label>
        <AuthenticationForm.Input />
      </AuthenticationForm.Wrapper>
      <AuthenticationForm.Button></AuthenticationForm.Button>
    </AuthenticationForm>
  );
}
