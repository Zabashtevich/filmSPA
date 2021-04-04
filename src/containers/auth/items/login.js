import React from "react";

import { Auth } from "../../../components";

export default function Login() {
  return (
    <>
      <Auth.Header>
        <Auth.Title>Login</Auth.Title>
      </Auth.Header>
      <Auth.Row>
        <Auth.Name>Mail</Auth.Name>
        <Auth.Inner>
          <Auth.Input />
          <Auth.Mail />
        </Auth.Inner>
      </Auth.Row>
      <Auth.Row>
        <Auth.Name>Pass</Auth.Name>
        <Auth.Inner>
          <Auth.Input />
          <Auth.Key />
        </Auth.Inner>
      </Auth.Row>
      <Auth.Wrapper>
        <Auth.Back></Auth.Back>
        <Auth.Button></Auth.Button>
      </Auth.Wrapper>
      <Auth.Message>
        <Auth.Subtitle>Do not have an account?</Auth.Subtitle>
        <Auth.Link>Create it here</Auth.Link>
      </Auth.Message>
    </>
  );
}
