import React from "react";

import { Auth } from "../../../components";

export default function Login() {
  return (
    <>
      <Auth.Header>
        <Auth.Title>Login</Auth.Title>
      </Auth.Header>
      <Auth.Row>
        <Auth.Inner>
          <Auth.Input placeholder="Email" />
          <Auth.Mail />
        </Auth.Inner>
      </Auth.Row>
      <Auth.Row>
        <Auth.Inner>
          <Auth.Input placeholder="Password" />
          <Auth.Key />
        </Auth.Inner>
      </Auth.Row>
      <Auth.Wrapper>
        <Auth.Button>LOGIN</Auth.Button>
        <Auth.Back>BACK</Auth.Back>
      </Auth.Wrapper>
      <Auth.Message>
        <Auth.Subtitle>Do not have an account?</Auth.Subtitle>
        <Auth.Link to="/">Create it here</Auth.Link>
      </Auth.Message>
    </>
  );
}
