import React, { useState } from "react";

import { Auth } from "../../../components";

export default function Signup({ register, handleSubmit }) {
  const [url, setUrl] = useState(null);

  function validateImage(e) {
    const file = e.target.files[0];
    if (parseFloat(file.size / (1024 * 1024)) >= 3) {
      //todo error modal
    }
    let img = new Image();
    img.src = window.URL.createObjectURL(file);

    img.onload = () => {
      if (img.width > 200 || img.height > 200) {
        console.log("ne norm");
      } else {
        setUrl(img.src);
      }
    };
  }

  function signup(value) {}

  return (
    <Auth.Form type="signup" onSubmit={handleSubmit(signup)}>
      <Auth.Header type="signup">
        <Auth.Title>SIGN UP</Auth.Title>
        <Auth.Avatar src={url} disabled={url === null && 1} />
        <Auth.File type="file" onChange={validateImage} />
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
          placeholder="Name"
          type="name"
          name="name"
          inputRef={register({
            required: {
              value: true,
              message: "name field can not be empty",
            },
            maxLength: 20,
          })}
        />
        <Auth.Nickname />
      </Auth.Row>
      <Auth.Row>
        <Auth.Input
          placeholder="Password"
          type="password"
          name="password"
          inputRef={register({
            required: {
              value: true,
              message: "password field can not be empty",
            },
            maxLength: 30,
          })}
        />
        <Auth.Key />
      </Auth.Row>
      <Auth.Row>
        <Auth.Input
          placeholder="Repeat password"
          type="password"
          name="repeatPassword"
          inputRef={register({
            required: {
              value: true,
              message: "repeat password field can not be empty",
            },
            maxLength: 30,
          })}
        />
        <Auth.Key />
      </Auth.Row>
      <Auth.Wrapper>
        <Auth.Button type="submit">REGISTER</Auth.Button>
        <Auth.Back>BACK</Auth.Back>
      </Auth.Wrapper>
      <Auth.Message>
        <Auth.Subtitle>Already have an account?</Auth.Subtitle>
        <Auth.Link to="/authentication/login">Login here</Auth.Link>
      </Auth.Message>
    </Auth.Form>
  );
}
