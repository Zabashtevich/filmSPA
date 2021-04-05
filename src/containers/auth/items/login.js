import React from "react";

import { Auth } from "../../../components";

export default function Login({ register, handleSubmit }) {
  function login(value) {
    console.log(value);
  }

  return (
    <Auth.Form onSubmit={handleSubmit(login)}>
      <Auth.Header>
        <Auth.Title>Login</Auth.Title>
      </Auth.Header>
      <Auth.Row>
        <Auth.Input
          placeholder="Email"
          type="email"
          name="email"
          inputRef={register({
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
        <Auth.Mail />
      </Auth.Row>
      <Auth.Row>
        <Auth.Input
          type="password"
          name="password"
          placeholder="Password"
          inputRef={register({
            required: {
              value: true,
              message: "password field can not be empty",
            },
            minLength: {
              value: 8,
              message: "password min length is 8",
            },
          })}
        />
        <Auth.Key />
      </Auth.Row>
      <Auth.Wrapper>
        <Auth.Button type="submit">LOGIN</Auth.Button>
        <Auth.Back>BACK</Auth.Back>
      </Auth.Wrapper>
      <Auth.Message>
        <Auth.Subtitle>Do not have an account?</Auth.Subtitle>
        <Auth.Link to="/authentication/signup">Create it here</Auth.Link>
      </Auth.Message>
    </Auth.Form>
  );
}
