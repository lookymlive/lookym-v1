"use client";

import { Input } from "@nextui-org/react";
import { FC, useState } from "react";
import { useFormState } from "react-dom";
import { updatePassword } from "../actions/auth";
import AuthSubmitButton from "./AuthSubmitButton";

interface Props {
  token: string;
  userId: string;
}

const UpdatePasswordForm: FC<Props> = ({ userId, token }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [state, action] = useFormState(updatePassword, {});
  const { error, success } = state;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      return;
    }
    setPasswordMatchError(false);
    action();
  };

  return (
    <div className="space-y-6 max-w-96 mx-auto pt-20 sm:p-0 p-4">
      {success && <p className="text-green-500">Password Updated Successfully.</p>}
      {error && <p className="text-red-500">{error}</p>}
      {passwordMatchError && <p className="text-red-500">Passwords do not match!</p>}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <h1 className="text-2xl">Update Password</h1>
        <input name="token" value={token} hidden />
        <input name="userId" value={userId} hidden />
        <Input
          name="one"
          type="password"
          placeholder="********"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          name="two"
          type="password"
          placeholder="********"
          label="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <AuthSubmitButton label="Update Password" />
      </form >
    </div>
  );
};

export default UpdatePasswordForm;
