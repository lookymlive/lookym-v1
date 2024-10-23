 "use client";

// Importamos las dependencias necesarias
import { Input } from "@nextui-org/react";
import { FC, useState } from "react";
import { useFormState } from "react-dom";
import { updatePassword } from "../actions/auth";
import AuthSubmitButton from "./AuthSubmitButton";

// Definimos la interfaz para los props del componente
interface Props {
  // Token de autenticación
  token: string;
  // ID del usuario
  userId: string;
}

// Definimos el componente UpdatePasswordForm
const UpdatePasswordForm: FC<Props> = ({ userId, token }) => {
  // Estado para almacenar la contraseña
  const [password, setPassword] = useState("");
  // Estado para almacenar la confirmación de la contraseña
  const [confirmPassword, setConfirmPassword] = useState("");
  // Estado para almacenar el error de coincidencia de contraseñas
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  // Estado para almacenar el resultado de la acción de actualizar contraseña
  const [state, action] = useFormState(updatePassword, {});
  // Desestructuramos el estado para obtener el error y el éxito
  const { error, success } = state;

  // Función para manejar la submit del formulario
  const handleSubmit = (e: React.FormEvent) => {
    // Evitamos la acción por defecto del formulario
    e.preventDefault();
    // Comprobamos si las contraseñas coinciden
    if (password !== confirmPassword) {
      // Si no coinciden, mostramos el error
      setPasswordMatchError(true);
      return;
    }
    // Si coinciden, ocultamos el error
    setPasswordMatchError(false);
    // Creamos un objeto FormData para enviar los datos
    const formData = new FormData();
    // Añadimos los datos al objeto FormData
    formData.append('one', password);
    formData.append('two', confirmPassword);
    formData.append('token', token);
    formData.append('userId', userId);

    // Llamamos a la acción de actualizar contraseña con los datos
    action(formData);
  };

  // Renderizamos el componente
  return (
    <div className="space-y-6 max-w-96 mx-auto pt-20 sm:p-0 p-4">
      {success && <p className="text-green-500">Contraseña actualizada con éxito.</p>}
      {error && <p className="text-red-500">{error}</p>}
      {passwordMatchError && <p className="text-red-500">Las contraseñas no coinciden.</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <h1 className="text-2xl">Actualizar Contraseña</h1>
        <input name="token" value={token} hidden />
        <input name="userId" value={userId} hidden />
        <Input
          name="one"
          type="password"
          placeholder="********"
          label="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          name="two"
          type="password"
          placeholder="********"
          label="Confirmar Contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <AuthSubmitButton label="Actualizar Contraseña" />
      </form>
    </div>
  );
};

// Exportamos el componente
export default UpdatePasswordForm;