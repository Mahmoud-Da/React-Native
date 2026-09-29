import React, { useState } from "react";
import jwtDecode from "jwt-decode";

import authApi from "../api/auth";

import {
  Form,
  FormField,
  SubmitButton,
  ErrorMessage,
} from "../components/forms";

function LoginScreen() {
  const [loginFailed, setLoginFailed] =
    useState(false);

  const handleSubmit = async ({
    email,
    password,
  }) => {
    const result = await authApi.login(
      email,
      password
    );

    if (!result.ok) {
      setLoginFailed(true);
      return;
    }

    setLoginFailed(false);

    const user = jwtDecode(result.data);

    console.log(user);
  };

  return (
    <Form
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <ErrorMessage
        error="Invalid email and/or password."
        visible={loginFailed}
      />

      <FormField
        name="email"
        placeholder="Email"
      />

      <FormField
        name="password"
        placeholder="Password"
        secureTextEntry
      />

      <SubmitButton title="Login" />
    </Form>
  );
}

export default LoginScreen;
