"use client";

import { FC } from "react";
import AuthForm from "../components/AuthForm";
import { Input } from "@nextui-org/react";
import { generatePassResetLink } from "../actions/auth";
import { useActionState } from "react"; // Cambiado a useActionState

interface Props {}

const ForgetPassword: FC<Props> = () => {
  const [state, action] = useActionState(generatePassResetLink, {}); // Usamos useActionState

  return (
    <AuthForm
      action={action}
      error={state.error}
      message={state.message}
      btnLabel="Request Reset Link"
      title="Forget Password"
      footerItems={[
        { label: "Sign Up", linkText: "Create an account", link: "/sign-up" },
        {
          label: "Already have an account",
          linkText: "Sign In",
          link: "/sign-in",
        },
      ]}
    >
      <Input name="email" placeholder="lookym@gmail.com" type="text" />
    </AuthForm>
  );
};

export default ForgetPassword;
