"use client";
import { FC } from "react";
import { Input } from "@nextui-org/react";
import AuthForm from "@/app/components/AuthForm";
import { useFormState } from "react-dom";
import { continueWithCredentials } from "@/app/actions/auth";

interface Props {}

const SignIn: FC<Props> = () => {
  const [state, signInAction] = useFormState(continueWithCredentials, {});

  return (
    <AuthForm
      footerItems={[
        { label: "Create an account", linkText: "Sign Up", link: "/sign-up" },
        {
          label: "Having trouble",
          linkText: "Forget password",
          link: "/forget-password",
        },
      ]}
      btnLabel="Sign In"
      title="Log In"
      action={signInAction}
    >
      <Input placeholder="lookym@gmail.com" name="email" />
      <Input placeholder="********" type="password" name="password" />
    </AuthForm>
  );
};

export default SignIn;
