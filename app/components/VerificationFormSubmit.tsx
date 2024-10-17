"use client";

import { FC } from "react";
import { useFormStatus } from "react-dom";

// Estilos reutilizables para consistencia
const buttonStyles = {
  base: "font-semibold underline",
  loading: "opacity-50",
  normal: "opacity-100",
};

interface Props {}

const VerificationFormSubmit: FC<Props> = () => {
  const { pending } = useFormStatus();
  
  return (
    <button
      disabled={pending}
      type="submit"
      className={`${buttonStyles.base} ${pending ? buttonStyles.loading : buttonStyles.normal}`}
    >
      {pending ? "Please wait..." : "Click Here"}
    </button>
  );
};

export default VerificationFormSubmit;

