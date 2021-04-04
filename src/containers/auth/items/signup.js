import React from "react";
import { Auth } from "../../../components";

export default function Signup() {
  return (
    <>
      <Auth.Header>
        <Auth.Title>SIGN UP</Auth.Title>
      </Auth.Header>
      <Auth.Row>
        <Auth.Input placeholder="Email" />
        <Auth.Mail />
      </Auth.Row>
      <Auth.Row>
        <Auth.Input placeholder="Nickname" />
        <Auth.Nickname />
      </Auth.Row>
      <Auth.Row>
        <Auth.Input placeholder="Password" />
        <Auth.Key />
      </Auth.Row>
      <Auth.Row>
        <Auth.Input placeholder="Repeat password" />
        <Auth.Key />
      </Auth.Row>
      <Auth.Wrapper>
        <Auth.Button>REGISTER</Auth.Button>
        <Auth.Back>BACK</Auth.Back>
      </Auth.Wrapper>
      <Auth.Message>
        <Auth.Subtitle>Already have an account?</Auth.Subtitle>
        <Auth.Link>Login here</Auth.Link>
      </Auth.Message>
    </>
  );
}
