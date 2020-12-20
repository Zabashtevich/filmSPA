import React from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import AuthenticationForm from "../components/authentication-form";
import {
  LoginFields,
  RegisterFields,
} from "./auxillary-containers/auth-fields";

export default function AuthenticationPageContainer() {
  const location = useParams();

  const { register, handleSubmit, errors } = useForm();

  return (
    <AuthenticationForm>
      <AuthenticationForm.Form>
        <AuthenticationForm.ErrorContainer>
          <AuthenticationForm.ErrorMessage></AuthenticationForm.ErrorMessage>
        </AuthenticationForm.ErrorContainer>
        <AuthenticationForm.Title>
          {location.slug.toUpperCase()}
        </AuthenticationForm.Title>
        {location.slug === "login" ? <LoginFields /> : <RegisterFields />}
        <AuthenticationForm.Button type={"submit"}>
          {location.slug.toUpperCase()}
        </AuthenticationForm.Button>
      </AuthenticationForm.Form>
    </AuthenticationForm>
  );
}
