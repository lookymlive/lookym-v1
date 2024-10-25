"use client";

import { Input } from "@nextui-org/react";
import { FC, useState } from "react";
import { updatePassword } from "@/app/actions/auth";
import AuthSubmitButton from "@/app/components/AuthSubmitButton";

interface Props {
  token: string;
  userId: string;
}

const UpdatePasswordForm: FC<Props> = ({ userId, token }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Función para manejar la submit del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      return;
    }
    
    setPasswordMatchError(false);
    setLoading(true);

    try {
      // Llamamos a la acción de actualizar contraseña con los datos
      await updatePassword({ password, token, userId });
      setSuccess(true);
      setError(null);
    } catch (err: any) {
      setError(err.message || "Error al actualizar la contraseña");
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 max-w-96 mx-auto pt-20 sm:p-0 p-4">
      {success && <p className="text-green-500">Contraseña actualizada con éxito.</p>}
      {error && <p className="text-red-500">{error}</p>}
      {passwordMatchError && <p className="text-red-500">Las contraseñas no coinciden.</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <h1 className="text-2xl">Actualizar Contraseña</h1>

        <Input
          name="password"
          type="password"
          placeholder="********"
          label="Nueva Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="********"
          label="Confirmar Contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <AuthSubmitButton label="Actualizar Contraseña" loading={loading} />
      </form>
    </div>
  );
};

export default UpdatePasswordForm;
