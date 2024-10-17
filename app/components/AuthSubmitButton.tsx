"use client";
import { FC } from "react";
import { useFormStatus } from "react-dom";

// Reutilizamos estilos comunes para mejorar la consistencia y facilidad de cambios futuros
const buttonStyles = {
  base: "flex items-center justify-center w-full text-center p-2 cursor-pointer rounded-small",
  disabled: "opacity-50",
  enabled: "opacity-100",
};

interface Props {
  label: string;
}

const AuthSubmitButton: FC<Props> = ({ label }) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className={`${buttonStyles.base} ${pending ? buttonStyles.disabled : buttonStyles.enabled}`}
      disabled={pending}
    >
      {pending && (
        <div className="border-gray-300 h-4 w-4 animate-spin rounded-full border-2 border-t-black mr-2" />
      )}
      {label}
    </button>
  );
};

export default AuthSubmitButton;
