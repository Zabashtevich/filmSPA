import React from "react";

import { Auth } from "../../../components";

export default function Login({ register, handleSubmit }) {
  return (
    <Auth.Form>
      <Auth.Header>
        <Auth.Title>Login</Auth.Title>
      </Auth.Header>
      <Auth.Row>
        <Auth.Input placeholder="Email" />
        <Auth.Mail />
      </Auth.Row>
      <Auth.Row>
        <Auth.Input placeholder="Password" />
        <Auth.Key />
      </Auth.Row>
      <Auth.Wrapper>
        <Auth.Button>LOGIN</Auth.Button>
        <Auth.Back>BACK</Auth.Back>
      </Auth.Wrapper>
      <Auth.Message>
        <Auth.Subtitle>Do not have an account?</Auth.Subtitle>
        <Auth.Link to="/authentication/signup">Create it here</Auth.Link>
      </Auth.Message>
    </Auth.Form>
  );
}
