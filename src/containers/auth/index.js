import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";

import { useAuth } from "./../../hooks";
import { Auth } from "../../components";
import { getPreviewSrc, validateImage } from "../../utils";

export default function AuthContainer() {
  const { slug } = useParams();

  return (
    <Auth>
      {slug === "login" && <LoginRows />}
      {slug === "signup" && <SignupRows />}
    </Auth>
  );
}

function LoginRows() {
  const { register, handleSubmit, errors } = useForm();
  const [loading, authError, setAuthProps] = useAuth();
  const [errorList, setErrorList] = useState([]);

  function login(value) {
    setErrorList([]);
    setAuthProps({ type: "login", value });
  }

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setErrorList([
        ...Object.keys(errors).map((item) => errors[item].message),
      ]);
    }
  }, [errors]);

  useEffect(() => {
    if (authError) {
      setErrorList(errorList.concat(authError));
    }
  }, [authError]);

  return (
    <Auth.Form onSubmit={handleSubmit(login)}>
      <Auth.Title>Log in</Auth.Title>
      <Auth.Redirect>
        DO NOT HAVE AN ACCOUNT?
        <Auth.Link to="/authentication/signup">SIGN UP</Auth.Link>
      </Auth.Redirect>
      <Auth.Wrapper visible={errorList.length > 0}>
        {errorList.map((item, index) => (
          <Auth.Error key={index}>{item}</Auth.Error>
        ))}
      </Auth.Wrapper>
      <Auth.Input
        type="email"
        name="email"
        placeholder="Email adress"
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
      <Auth.Spinner visible={loading} />
      <Auth.Button type="submit" disabled={loading ? 1 : 0}>
        LOGIN
      </Auth.Button>
    </Auth.Form>
  );
}

function SignupRows() {
  const { register, handleSubmit, errors } = useForm();
  const [loading, authError, setAuthProps] = useAuth();
  const [url, setUrl] = useState(null);
  const [{ errorList, process, file }, setState] = useState({
    errorList: [],
    process: false,
    file: null,
  });

  function signup({ email, password, repeatPassword, nickname }) {
    if (password === repeatPassword)
      setState((prev) => ({ ...prev, errorList: ["Passwords do not match"] }));
    setState((prev) => ({ ...prev, errorList: [] }));
    setAuthProps({
      type: "signup",
      value: { password, email, file, nickname },
    });
  }

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setState((prev) => ({
        ...prev,
        errorList: [...Object.keys(errors).map((item) => errors[item].message)],
      }));
    }
  }, [errors]);

  useEffect(() => {
    if (authError) {
      setState((prev) => ({ ...prev, errorList: errorList.concat(authError) }));
    }
  }, [authError]);

  useEffect(() => {
    if (file !== null) {
      getPreviewSrc(file, setUrl);
    }
  }, [file]);

  function onFileChange(e) {
    setUrl(null);
    setState((prev) => ({ ...prev, errorList: [] }));
    validateImage(e.target.files[0], setState);
  }

  return (
    <Auth.Form onSubmit={handleSubmit(signup)}>
      <Auth.Title>Sign Up</Auth.Title>
      <Auth.Redirect>
        Already have an account?
        <Auth.Link to="/authentication/login">SIGN UP</Auth.Link>
      </Auth.Redirect>
      <Auth.Wrapper visible={errorList.length > 0 ? 1 : 0}>
        {errorList.map((item, index) => (
          <Auth.Error key={index}>{item}</Auth.Error>
        ))}
      </Auth.Wrapper>

      <Auth.Placeholder src={url && url} />

      <Auth.Input
        type="file"
        onChange={(e) => onFileChange(e)}
        accept="image/x-png,image/gif,image/jpeg"
      />

      <Auth.Input
        type="email"
        name="email"
        placeholder="Email adress"
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

      <Auth.Input
        type="nickname"
        name="nickname"
        placeholder="Nickname"
        inputRef={register({
          required: {
            value: true,
            message: "nickname field can not be empty",
          },
          maxLength: 20,
        })}
      />

      <Auth.Input
        type="password"
        name="password"
        placeholder="Password"
        inputRef={register({
          required: {
            value: true,
            message: "password field can not be empty",
          },
          maxLength: 30,
        })}
      />

      <Auth.Input
        type="password"
        name="repeatPassword"
        placeholder="Repeat password"
        inputRef={register({
          required: {
            value: true,
            message: "repeat password field can not be empty",
          },
          maxLength: 30,
        })}
      />
      <Auth.Spinner visible={process || loading} />
      <Auth.Button type="submit" disabled={process || loading ? 1 : 0}>
        SIGN UP
      </Auth.Button>
    </Auth.Form>
  );
}
