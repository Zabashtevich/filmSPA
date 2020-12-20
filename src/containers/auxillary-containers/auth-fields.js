import React from "react";

import AuthenticationForm from "../../components/authentication-form";

export function LoginFields() {
  return (
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
  );
}

export function RegisterFields() {
  return (
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
        <AuthenticationForm.Label>Repeat password</AuthenticationForm.Label>
        <AuthenticationForm.Input type={"password"} name={"repeatPassword"} />
      </AuthenticationForm.Wrapper>
    </>
  );
}
