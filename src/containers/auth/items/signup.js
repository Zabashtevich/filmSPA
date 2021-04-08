import React, { useRef, useState } from "react";

import { Auth } from "../../../components";
import { useAuthContext, useModalContext } from "../../../context";
import { validateUserAvatar } from "../../../utils";
import { useHistory } from "react-router";

export default function Signup({ register, handleSubmit }) {
  const { signup, loadUserAvatar } = useAuthContext();
  const [, { showErrorModal }] = useModalContext();

  const [url, setUrl] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const previewRef = useRef();

  function onFileChange(event) {
    setUrl(null);
    setFile(null);

    validateUserAvatar(event)
      .then(({ src, file }) => {
        setUrl(src);
        setFile(file);
      })
      .catch(() => {
        showErrorModal("Image too big");
        setUrl(null);
        setFile(null);
      });
  }

  function onSubmit(data) {
    loadUserAvatar(file)
      .then((url) => {
        return signup({ ...data, url });
      })
      .catch((error) => {
        setLoading(false);
        showErrorModal(error);
      })
      .finally(() => {
        setLoading(false);
        history.push("/");
      });
  }

  return (
    <Auth.Form
      type="signup"
      onSubmit={handleSubmit(onSubmit)}
      aria-label="form"
    >
      <Auth.Header type="signup">
        <Auth.Title>SIGN UP</Auth.Title>
        <Auth.Avatar
          src={url}
          disabled={url === null && 1}
          previewRef={previewRef}
          data-testid="auth-avatar"
        />
        <Auth.File type="file" onChange={onFileChange} placeholder="file" />
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
              message: "Name field can not be empty",
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
              message: "Password field can not be empty",
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
        <Auth.Subtitle>Already have an account ?</Auth.Subtitle>
        <Auth.Link to="/authentication/login">Login here</Auth.Link>
      </Auth.Message>
    </Auth.Form>
  );
}
