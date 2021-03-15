import React from "react";
import { useParams } from "react-router";

import { Auth } from "../../components";

export default function AuthContainer() {
  const { direction } = useParams();

  return (
    <Auth>
      <Auth.Toggler>
        <Auth.Item></Auth.Item>
        <Auth.Item></Auth.Item>
      </Auth.Toggler>
      <Auth.Form>
        {direction === "login" && <LoginRows />}
        {direction === "signup" && <SignupRows />}
      </Auth.Form>
    </Auth>
  );
}

function LoginRows() {
  return (
    <>
      <Auth.Row>
        <Auth.Subtitle>Email</Auth.Subtitle>
        <Auth.Input />
      </Auth.Row>
      <Auth.Row>
        <Auth.Subtitle>Password</Auth.Subtitle>
        <Auth.Input />
      </Auth.Row>
      <Auth.Button>LOGIN</Auth.Button>
      <Auth.Redirect>
        Do not have an account? <Auth.Link>Sign Up</Auth.Link>
      </Auth.Redirect>
    </>
  );
}

function SignupRows() {
  return (
    <>
      <Auth.Row>
        <Auth.Subtitle>Avatar</Auth.Subtitle>
        <Auth.Input />
      </Auth.Row>
      <Auth.Row>
        <Auth.Subtitle>Email</Auth.Subtitle>
        <Auth.Input />
      </Auth.Row>
      <Auth.Row>
        <Auth.Subtitle>Nickname</Auth.Subtitle>
        <Auth.Input />
      </Auth.Row>
      <Auth.Row>
        <Auth.Subtitle>Password</Auth.Subtitle>
        <Auth.Input />
      </Auth.Row>
      <Auth.Row>
        <Auth.Subtitle>Repeat password</Auth.Subtitle>
        <Auth.Input />
      </Auth.Row>
      <Auth.Redirect>
        Already have an account? <Auth.Link>Login</Auth.Link>
      </Auth.Redirect>
    </>
  );
}
