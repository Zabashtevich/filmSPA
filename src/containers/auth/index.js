import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";

import { useAuth } from "./../../hooks";
import { Auth } from "../../components";
import { getPreviewSrc, validateImage } from "../../utils";

export default function AuthContainer() {
  const { register, handleSubmit, errors } = useForm();
  const [props, setProps] = useState({
    file: null,
    loading: false,
    errorList: [],
  });
  const [process, error, setAuthProps] = useAuth();

  const { slug } = useParams();

  useEffect(() => {
    let values = Object.keys(errors);
    if (values.length > 0) {
      setProps((prev) => ({
        ...prev,
        errorList: [...values.map((item) => errors[item].message)],
      }));
    }
  }, [errors]);

  useEffect(() => {
    if (error) {
      setProps((prev) => ({ ...prev, errorList: [...prev.errorList, error] }));
    }
  }, [error]);

  function submit(value) {
    setAuthProps({ type: "login", value });
  }

  function onFileChange(e) {
    validateImage(e.target.file[0], setProps);
  }

  return (
    <Auth>
      <Auth.Form onSubmit={handleSubmit(submit)}>
        {slug === "login" && (
          <LoginRows register={register} props={props} process={process} />
        )}
        {slug === "signup" && (
          <SignupRows
            register={register}
            props={props}
            process={process}
            onFileChange={onFileChange}
          />
        )}
      </Auth.Form>
    </Auth>
  );
}

function LoginRows({ register, props, process }) {
  const { loading, errorList } = props;

  return (
    <>
      <Auth.Title>Log in</Auth.Title>
      <Auth.Redirect>
        DO NOT HAVE AN ACCOUNT?
        <Auth.Link to="/authentication/signup">SIGN UP</Auth.Link>
      </Auth.Redirect>
      <Auth.Wrapper visible={errorList.length > 0 ? 1 : 0}>
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
      <Auth.Spinner visible={process || loading} />
      <Auth.Button type="submit" disabled={process || loading ? 1 : 0}>
        LOGIN
      </Auth.Button>
    </>
  );
}

function SignupRows({ register, props, process, onFileChange }) {
  const [url, setUrl] = useState(null);
  const { errorList, file } = props;

  useEffect(() => {
    if (file !== null) {
      getPreviewSrc(file, setUrl);
    }
  }, [file]);

  return (
    <>
      <Auth.Title>Sign Up</Auth.Title>
      <Auth.Redirect>
        Already have an account?
        <Auth.Link to="/authentication/login">SIGN UP</Auth.Link>
      </Auth.Redirect>
      <Auth.Wrapper visible={errors.length > 0 ? 1 : 0}>
        {errorList.map((item, index) => (
          <Auth.Error key={index}>{item}</Auth.Error>
        ))}
      </Auth.Wrapper>

      <Auth.Placeholder visible={!!url} src={url} />

      <Auth.Input
        type="file"
        onChange={(e) => onFileChange(e)}
        accept="image/x-png,image/gif,image/jpeg"
      />

      <Auth.Input type="email" placeholder="Email adress" />

      <Auth.Input type="nickname" placeholder="Nickname" />

      <Auth.Input type="password" placeholder="Password" />

      <Auth.Input type="password" placeholder="Repeat password" />
      <Auth.Spinner visible={process} />
      <Auth.Button type="submit" disabled={process ? 1 : 0}>
        LOGIN
      </Auth.Button>
    </>
  );
}
