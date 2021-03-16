import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";

import { useAuth } from "./../../hooks";
import { Auth } from "../../components";

export default function AuthContainer() {
  const { register, handleSubmit, errors } = useForm();
  const [errorsArray, setErrorsArray] = useState([]);
  const [process, error, setAuthProps] = useAuth();
  const { slug } = useParams();

  function submit(value) {
    setAuthProps({ type: "login", value });
  }

  useEffect(() => {
    let values = Object.keys(errors);
    if (values.length > 0) {
      setErrorsArray([...values.map((item) => errors[item].message)]);
    }
  }, [errors]);

  useEffect(() => {
    if (error) {
      setErrorsArray((prev) => [...prev, error]);
    }
  }, [error]);

  return (
    <Auth>
      <Auth.Form onSubmit={handleSubmit(submit)}>
        {slug === "login" && (
          <LoginRows register={register} errors={errorsArray} />
        )}
        {slug === "signup" && <SignupRows register={register} />}
      </Auth.Form>
    </Auth>
  );
}

function LoginRows({ register, errors, process }) {
  return (
    <>
      <Auth.Title>Log in</Auth.Title>
      <Auth.Redirect>
        DO NOT HAVE AN ACCOUNT?
        <Auth.Link to="/authentication/signup">SIGN UP</Auth.Link>
      </Auth.Redirect>
      <Auth.Wrapper visible={errors.length > 0 ? 1 : 0}>
        {errors.map((item, index) => (
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
      <Auth.Button type="submit" disabled={process ? 1 : 0}>
        {process ? <SmallS}
      </Auth.Button>
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
