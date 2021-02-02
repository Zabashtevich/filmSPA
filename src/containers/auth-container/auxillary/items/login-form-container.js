import React from "react";

import { AuthenticationForm } from "../../../../components";

export default function LoginFormContainer({ register }) {
  return (
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
      <AuthenticationForm.Wrapper>
        <AuthenticationForm.TextLink to={"/authentication/registration"}>
          Want create an account?
        </AuthenticationForm.TextLink>
      </AuthenticationForm.Wrapper>
    </>
  );
}
