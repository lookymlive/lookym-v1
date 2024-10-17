"use client";

import { auth } from "@/auth";
import { FC } from "react";
import { Input } from "@nextui-org/react";
import AuthForm from "@/app/components/AuthForm";
import { signUp } from "@/app/actions/auth";
import { useFormState } from "react-dom";  // Verifica que useFormState esté bien configurado

interface Props {}

const SignUp: FC<Props> = () => {
  const [state, signUpAction] = useFormState(signUp, {});

  return (
    <AuthForm
      action={signUpAction}
      footerItems={[
        {
          label: "Already have an account",
          linkText: "Sign In",
          link: "/sign-in",
        },
        {
          label: "Having trouble",
          linkText: "Forget password",
          link: "/forget-password",
        },
      ]}
      btnLabel="Sign Up"
      title="Sign Up"
      error={state.error}
      message={state.success ? "Please check your email." : ""}
    >
      {/* Input para el nombre */}
      <Input
        errorMessage={state.errors?.name?.join(", ")}
        isInvalid={state.errors?.name ? true : false}
        placeholder="Luis Paulo"
        name="name"
      />
      {/* Input para el correo electrónico */}
      <Input
        errorMessage={state.errors?.email?.join(", ")}
        isInvalid={state.errors?.email ? true : false}
        placeholder="lookym@gmail.com"
        name="email"
      />
      {/* Input para la contraseña */}
      <Input
        errorMessage={state.errors?.password?.join(", ")}
        isInvalid={state.errors?.password ? true : false}
        placeholder="********"
        type="password"
        name="password"
      />
    </AuthForm>
  );
};

export default SignUp;
