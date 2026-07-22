import React, { useState } from "react";

import authApi from "../api/auth";
import useAuth from "../auth/useAuth";

import {
  Form,
  FormField,
  SubmitButton,
  ErrorMessage,
} from "../components/forms";

function LoginScreen() {
  const [loginFailed, setLoginFailed] = useState(false);

  const { login } = useAuth();

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);

    if (!result.ok) {
      setLoginFailed(true);
      return;
    }

    setLoginFailed(false);

    login(result.data);
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
