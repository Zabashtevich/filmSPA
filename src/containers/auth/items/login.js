import React, { useState } from "react";

import { useAuthContext, useModalContext } from "./../../../context";
import { Auth } from "../../../components";
import { useHistory } from "react-router";

export default function Login({ register, handleSubmit }) {
  const [, { showErrorModal }] = useModalContext();
  const [loading, setLoading] = useState(false);

  const { login } = useAuthContext();
  const history = useHistory();

  function signin(data) {
    setLoading(true);
    login(data)
      .then(() => {
        setLoading(false);
        history.push("/");
      })
      .catch((error) => {
        setLoading(false);
        showErrorModal(error.message);
      });
  }

  return (
    <Auth.Form onSubmit={handleSubmit(signin)} aria-label="form">
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
              message: "Email field can not be empty",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
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
              message: "Password field can not be empty",
            },
            minLength: {
              value: 8,
              message: "Password min length is 8",
            },
          })}
        />
        <Auth.Key />
      </Auth.Row>
      <Auth.Wrapper>
        <Auth.Button type="submit" disabled={loading && 1}>
          LOGIN
        </Auth.Button>
        <Auth.Back>BACK</Auth.Back>
      </Auth.Wrapper>
      <Auth.Message>
        <Auth.Subtitle>Do not have an account?</Auth.Subtitle>
        <Auth.Link to="/authentication/signup">Create it here</Auth.Link>
      </Auth.Message>
    </Auth.Form>
  );
}
