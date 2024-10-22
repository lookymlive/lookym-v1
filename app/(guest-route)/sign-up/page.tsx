"use client";

import { FC, useState } from "react";
import { Input } from "@nextui-org/react";
import AuthForm from "@/app/components/AuthForm";
import { signUp } from "@/app/actions/auth";
import { useFormState } from "react-dom";  // Verifica que useFormState esté bien configurado

interface Props {}

const SignUp: FC<Props> = () => {
  const [state, signUpAction] = useFormState(signUp, {});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleValidation = () => {
    if (!name || !email || !password) {
      setError("All fields are required");
      return false;
    }
    setError(""); // Clear error if validation passes
    return true;
  };

  const handleSubmit = () => {
    if (handleValidation()) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);

      signUpAction(formData); // Trigger sign-up action with form data
    }
  };

  return (
    <AuthForm
      action={handleSubmit}
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
      error={error} // Display validation errors
      message={state.success ? "Please check your email." : ""}
    >
      {/* Input for name */}
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        errorMessage={state.errors?.name?.join(", ")}
        isInvalid={state.errors?.name ? true : false}
        placeholder="Luis Paulo"
        name="name"
        aria-label="Name"
      />
      {/* Input for email */}
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        errorMessage={state.errors?.email?.join(", ")}
        isInvalid={state.errors?.email ? true : false}
        placeholder="lookym@gmail.com"
        name="email"
        aria-label="Email"
      />
      {/* Input for password */}
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        errorMessage={state.errors?.password?.join(", ")}
        isInvalid={state.errors?.password ? true : false}
        placeholder="********"
        type="password"
        name="password"
        aria-label="Password"
      />
    </AuthForm>
  );
};

export default SignUp;
