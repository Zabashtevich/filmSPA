import React from "react";
import { useParams } from "react-router";

import { Auth } from "../../components";

export default function AuthContainer() {
  const { slug } = useParams();

  return (
    <Auth>
      <Auth.Form>
        {slug === "login" && <LoginRows />}
        {slug === "signup" && <SignupRows />}
      </Auth.Form>
    </Auth>
  );
}

function LoginRows() {
  return (
    <>
      <Auth.Title>Log In</Auth.Title>
      <Auth.Row>
        <Auth.Subtitle>Email</Auth.Subtitle>
        <Auth.Input type="email" placeholder="Email adress" />
      </Auth.Row>
      <Auth.Row>
        <Auth.Subtitle>Password</Auth.Subtitle>
        <Auth.Input type="password" placeholder="Password" />
      </Auth.Row>
      <Auth.Button>LOGIN</Auth.Button>
      <Auth.Redirect>
        Do not have an account?
        <Auth.Link to="/authentication/signup">Sign Up</Auth.Link>
      </Auth.Redirect>
    </>
  );
}

function SignupRows() {
  return (
    <>
      <Auth.Title>Sign Up</Auth.Title>
      <Auth.Row>
        <Auth.Subtitle>Avatar</Auth.Subtitle>
        <Auth.Input type="file" />
      </Auth.Row>
      <Auth.Row>
        <Auth.Subtitle>Email</Auth.Subtitle>
        <Auth.Input type="email" />
      </Auth.Row>
      <Auth.Row>
        <Auth.Subtitle>Nickname</Auth.Subtitle>
        <Auth.Input />
      </Auth.Row>
      <Auth.Row>
        <Auth.Subtitle>Password</Auth.Subtitle>
        <Auth.Input type="password" />
      </Auth.Row>
      <Auth.Row>
        <Auth.Subtitle>Repeat password</Auth.Subtitle>
        <Auth.Input type="password" />
      </Auth.Row>
      <Auth.Redirect>
        Already have an account?
        <Auth.Link to="/authentication/login">SIGN UP</Auth.Link>
      </Auth.Redirect>
    </>
  );
}
