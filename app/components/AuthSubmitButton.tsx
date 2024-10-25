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
  loading?: boolean; // Agregamos la propiedad onClick opcional
}

const AuthSubmitButton: FC<Props> = ({ label, loading = false }) => {
  return (
    <button
      type="submit"
      className={`${buttonStyles.base} ${loading ? buttonStyles.disabled : buttonStyles.enabled}`}
      disabled={loading}
    >
      {loading && (
        <div className="border-gray-300 h-4 w-4 animate-spin rounded-full border-2 border-t-black mr-2" />
      )}
      {label}
    </button>
  );
};

export default AuthSubmitButton;

